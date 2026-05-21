---
title: "Never Assume the Database Will Auto-Grant"
date: "2026-05-17"
session: "S24-2026-05-16"
task: "T24-1"
pillar: "P11 Technical Craft × P12 Production Discipline"
analogy_domain: "DATABASE-SUPABASE-RLS-GRANT"
excerpt: "When the application-layer code looks correct but Postgres returns 42501, the problem is below the application — and the cheapest diagnostic was the one I ran last."
tags: [forge-finding, postgres, supabase, rls, grants, diagnosis-order]
---

## The lesson

When the application-layer code looks correct but Postgres returns `42501 (insufficient_privilege)`, the problem is below the application layer.

The cheapest diagnostic — `information_schema.role_table_grants` — should be the first check, not the last. Three hours of cascading hypotheses (key format wrong, RLS bypass broken, library version mismatch) all ran on top of a missing `GRANT`.

## Analogy — RAILWAY: Track Authority vs Signal

A train is cleared to enter a section. The signal shows green. The track-circuit is clear. The dispatcher's authority is confirmed. The train still doesn't move — because the trackman responsible for the section hasn't physically released the points lock. Three layers of authority all green; one mechanical interlock below them quietly refusing.

The crew can spend hours debugging the signaling system, the dispatcher's radio, the timetable interlock — all working perfectly. The fix is below all of them. The cheapest check (walk to the points and look) was the last thing tried because it was beneath the visible layers.

## How it landed in T24-1 carry-over

Migration `supabase/migrations/20260516_create_users.sql` created the `public.users` table with RLS enabled and a self-select policy. Server code used `@supabase/supabase-js` with `SUPABASE_SERVICE_ROLE_KEY`. Documented assumption: "service-role bypasses RLS."

Result in production: every `findUserByEmail` and `insertUser` call returned `code=42501` from Postgres. Signup happy path → 500. Login wrong-password path → masked 500-as-401.

**Root cause:** the migration never `GRANT`ed `SELECT/INSERT/UPDATE/DELETE` on `public.users` to the Supabase API roles (`anon`, `authenticated`, `service_role`). 42501 fired at the GRANT layer, BEFORE Postgres ever ran the RLS check. Disabling RLS entirely on the table did NOT make the 500 go away — that proved RLS was not the cause; GRANT was.

**Why this happens:** Supabase auto-grants DML to API roles via internal triggers — BUT only when migrations are applied through specific paths (Supabase CLI `db push`, dashboard "Run migration" UI, some MCP tools). When you apply the migration via the **SQL Editor** (which runs as `postgres` superuser), the auto-grant trigger does NOT fire because the postgres role is special-cased out. Tables created via SQL Editor get **no API-role grants by default.**

**The fix** — two SQL statements added to every migration that creates a table in `public`:

```sql
grant select, insert, update, delete on table public.<table_name>
  to anon, authenticated, service_role;

create policy <table_name>_service_role_all
  on public.<table_name>
  for all
  to service_role
  using (true)
  with check (true);
```

The explicit `FOR ALL TO service_role` policy is non-optional because Supabase rolled out a new API key format (`sb_publishable_*` + `sb_secret_*`) in late-2025/early-2026 alongside the legacy JWT format. Behavioral parity between formats for RLS-bypass is not guaranteed. The explicit policy makes service-role writes work regardless of which key format authenticates them.

**Hypotheses chased (4 wrong, 1 right):**

| # | Hypothesis | Verdict |
|---|------------|---------|
| 1 | JWT_SECRET missing on Railway → server crash | **CORRECT (separate bug)** — fixed; signup still 500 |
| 2 | `SUPABASE_SERVICE_ROLE_KEY` = anon key (swap mistake) | WRONG — env change DID redeploy; 42501 persisted |
| 3 | `sb_secret_*` key format incompatible with library | WRONG — library passes any key string as Bearer header |
| 4 | RLS denial — `sb_secret_*` doesn't trigger implicit bypass | WRONG — RLS disabled entirely; 42501 still fired |
| 5 | **Missing table GRANTs** | **RIGHT** — `information_schema.role_table_grants` showed zero DML for API roles |

The cheapest diagnostic was the one I ran last.

## The wider pattern

Diagnosis playbook for 42501 going forward:

1. **FIRST:** `select grantee, privilege_type from information_schema.role_table_grants where table_name = '<table>' and table_schema = '<schema>';`
2. **SECOND:** if all DML grants present, check `pg_policies` for the table + which role the request authenticates as
3. **THIRD:** only after (1) and (2), consider key-format / supabase-js version / role-mapping issues

This bug class is mechanically detectable. A grep at `forge-prompt-build` Phase 4 can scan every new Supabase migration for the pattern `create table public\.\w+ ... (?!grant.*on table public\.\w+ to.*service_role)` and FAIL the audit if the GRANT is missing.

Metaskill 01 Source Check applied: confirmed table grants empirically before assuming RLS; the empirical check was cheaper than the conceptual cascade. Metaskill 02 Audit the Audit applied: 4 wrong hypotheses before the right one is itself a signal that the diagnosis order was wrong, not that more diagnostics were needed.

## Sources

- [Supabase — Database Roles & Policies docs](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL — GRANT documentation](https://www.postgresql.org/docs/current/sql-grant.html)
- [PostgreSQL — Error Codes (42501 = insufficient_privilege)](https://www.postgresql.org/docs/current/errcodes-appendix.html)
