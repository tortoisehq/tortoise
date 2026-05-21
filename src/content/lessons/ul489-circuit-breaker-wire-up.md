---
title: "Audit the Primitive Once, Wire It Up Many Times"
date: "2026-05-16"
session: "S24-2026-05-16"
task: "T24-0"
pillar: "P15 Execution & Shipping Discipline"
analogy_domain: "ELECTRICAL-UL489-CIRCUIT-BREAKER"
excerpt: "When you ship a security primitive, audit it once; when you wire it up later to additional routes, the cost is config-mass, not audit-mass. The rigor lives in the primitive's audit."
tags: [forge-finding, certified-primitives, ul489, wire-up, audit-economics]
---

## The lesson

When you ship a security primitive, audit it once; when you wire it up later to additional routes, the cost is config-mass, not audit-mass.

The rigor lives in the primitive's audit. Wire-ups inherit it.

## Analogy — ELECTRICAL: UL 489 Circuit Breakers

When an electrician installs a UL 489-certified circuit breaker in a panel, the breaker was certified once at the factory. Wiring a new outlet to that breaker doesn't re-certify the breaker — the electrician performs a routine continuity + insulation-resistance check (~10-15 min) and signs off.

The certified primitive does the load-bearing work. The wire-up is mechanical. Re-certifying the breaker every time you add an outlet would be ceremonial cost without safety benefit.

## How it landed in T24-0

UL 489 is the ANSI standard for molded-case circuit breakers (first published 1955; current rev 2024). It certifies breakers at the factory to withstand specified short-circuit currents (typically 10kA to 200kA at 480V).

NEC Article 240 (National Electrical Code, NFPA 70) governs field-installation rules. Field installations of certified breakers require a continuity check + torque to spec on terminations (per UL 486A/B for connectors), NOT re-certification of the breaker. The certified-once-then-wire-up pattern is codified into electrical code, not optional — it's how the entire US electrical industry scales to ~3 billion outlets installed annually without bottlenecking on factory-level testing.

T24-0's 20-minute fix bolted an already-tested security gate (`apiKeyAuthMiddleware`, triple-auditor-scrutinized at T22-1) onto one more route. The hard work happened at T22-1. T24-0 just added 2 lines to apply that same gate to `mentor.ts` — same primitive, same shape, no new surface. The reward: a live security hole on `/api/mentor/mirror` is closed, Anthropic billing exposure is shut, and the next task (T24-1) builds on a clean baseline.

## The wider pattern

Sibling to S22 P15 *"Right-size the security primitive to the moment"* — this IS that lesson applied to a wire-up. Builds on S23 P15 *"Right-built (not under-built) foundation enables layered iteration"* — the primitive itself was right-built at T22-1; T24-0's wire-up is a layer.

Codifies the CLAUDE.md OPERATOR-AI PUSHBACK DISCIPLINE *known-pattern-repeat soft-trigger* — "5th+ time shipping the same shape" as defer-to-operator territory. Other "certified-once" primitives sitting un-applied to routes that should have them (smoke route unauth, rate-limit absent, helmet absent, trust-proxy absent) become candidates for batched LITE-cluster sessions.

## Sources

- [UL 489 — Standards Catalog](https://standardscatalog.ul.com/ProductDetail.aspx?productid=UL489)
- [NFPA 70: National Electrical Code](https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [UL Standards Development Process](https://www.ul.com/services/standards-development-process)
