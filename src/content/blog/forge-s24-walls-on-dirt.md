---
title: "Walls Don't Stand on Dirt"
date: "2026-05-16"
category: "forge"
tags: [forge, build-1, architecture, debugging]
excerpt: "Spent a day shipping an auth foundation. Production returned 500 on every signup. The root cause was below where I was looking."
---

![A locomotive sits at a stop signal, headlight on, idling. Track-circuit interlocks check the cheapest sensor first; the signal stays red until every layer below clears.](/images/blog/forge-s24-walls-on-dirt/signal-red.jpg)

Spent yesterday building the auth foundation that everything else in the commercial app has to stand on. Users table. Password hashing. Signup and login endpoints. Bearer-token plumbing for the mobile app. Per-user keypair generation bound to biometric authentication on the device. Four rounds of audit with three external reviewers each. A patch in the executor session. Then it shipped — and production immediately returned 500 on every signup attempt.

The health check passed. The deploy was green. The boot logs were clean. Every call to /api/auth/signup came back with Postgres error 42501 — insufficient_privilege.

The wrong hypotheses came fast and confidently. The signing secret was missing from the production environment — that explained an earlier boot failure but had been added before this deploy. The database key had been rotated to the platform's new format — but the error code wasn't transport-layer, the key was authenticating fine. The library version in node_modules turned out to be newer than the manifest claimed — but the library is format-agnostic about keys, it just passes them through. Disabling row-level security entirely on the table didn't change the response either. Three hours in, four wrong hypotheses chased, the actual root cause surfaced from the cheapest diagnostic I had not yet bothered to run: a query against `information_schema.role_table_grants`. The migration had granted REFERENCES, TRIGGER, and TRUNCATE to the API roles. It had not granted SELECT, INSERT, UPDATE, or DELETE. The table existed. The policies existed. The data layer below them was empty.

![A construction site showing a poured concrete slab next to a framed wooden wall standing on bare dirt — the wall is elaborate but useless without the slab beneath it.](/images/blog/forge-s24-walls-on-dirt/foundation-vs-wall.jpg)

## Walls Don't Stand on Dirt

Postgres permission denials emerge from a layered structure that runs in strict order: schema usage, then table grant, then row-level security policy, then column policy. When any layer denies, the layers below never even run. They all return the same error code. That's the trap. The migration had built a beautiful wall — the row-level policy — on no foundation. Postgres denied at the foundation. The wall never even got tested. The error code looked identical to a wall failure. The fix took fifteen seconds: grant the four operations to the API roles by name. The diagnosis order I should have started with was the cheapest sensor — same way a track-circuit is wired to read the simplest signal first, because that's what fails most. The four hypotheses I chased were all surface-level and expensive; the right one was cheap and one layer below where I was looking.

The platform's documented auto-grant behavior is implemented as event triggers fired on table-create events authored by certain roles. The superuser path — which is what the SQL Editor uses — is special-cased out. The trigger never fires when you apply a migration through the dashboard. The behavior in the docs assumed a different apply path than the one I took. Default implicit behaviors are stochastic apparatus. The defense is explicit declaration — every migration self-sufficient, every grant written down, every policy named. The migration in the repo now carries a comment block explaining why each piece is mandatory, partly for next-me and partly for the version of me trusting the docs at face value six months from now. This isn't a Postgres lesson, or even a database lesson. It's the same shape you find on every platform whose docs say "we handle this for you" — auto-vacuum, default permissions, default error handlers, IAM inheritance. Every "automatic" is a contract enforced by code paths you don't control. Specify the thing.

![A junction in the rails where two tracks merge, multiple signals lit, switch aligned for the next route — the work that came before makes the next move possible.](/images/blog/forge-s24-walls-on-dirt/junction.jpg)

Next session wires the bearer-token plumbing into the existing routes that need it. The foundation is poured. The walls go up.
