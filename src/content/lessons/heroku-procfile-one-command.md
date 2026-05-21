---
title: "One Command, All Processes"
date: "2026-04-29"
session: "S9-2026-04-29"
task: "T9-1"
pillar: "P11 Technical Craft × P12 Production Discipline"
analogy_domain: "INFRASTRUCTURE-HEROKU-2011"
excerpt: "A multi-process system that requires two terminals to start has an undocumented dependency that fails silently. Fix the one-command startup before you fix the multi-process bug."
tags: [forge-finding, dx, procfile, twelve-factor, heroku]
---

## The lesson

A multi-process system that requires two terminals to start has an undocumented dependency that fails silently — fix the one-command startup before you fix the multi-process bug, because every future bug investigation will repeat the same setup mistake.

The rail is "single command makes the right thing the easy thing." A failure mode that depends on the operator remembering an invisible second step has no enforcement.

## Analogy — RAILWAY: The Diesel Auxiliary Interlock

A diesel locomotive needs two systems running before it can move — the prime mover (engine) and the auxiliary generator (electrics for traction motors, lights, brakes). On older units crews would start the engine, walk away to throw a switch, and find the unit dead at departure because the auxiliary wasn't online.

The fix wasn't crew training — it was a single starter sequence interlock that brought both systems up together. One command. Either both run, or neither does.

## How it landed in T9-1

Heroku's `Procfile` (2011). When Heroku launched, every app needed a `web` process and most needed a `worker` process. Early adopters hit the same trap repeatedly — push to Heroku, the web dyno started, the worker didn't, the app appeared up but background jobs silently piled up.

Heroku's answer was the Procfile — a single declaration of every process the app needs, started together as a unit. Foreman (the local equivalent Heroku open-sourced) brought that pattern to local dev: one `Procfile`, one `foreman start`, all processes up. The whole 12-factor app movement codified this — Factor IX (Disposability) and the Procfile pattern explicitly: "the app declares all its processes; the platform runs them as a unit."

T9-1 fixed Workhorse's dashboard talking to its API server. Two separate Node processes. The operator started one (Vite) and not the other (API), so the dashboard tried to call the API, got nothing back, and showed a confusing "mirror stream failed: 500" error. The fix wasn't a code fix — it was a one-command startup script (`npm run dev` via concurrently) that starts both at once. Now the failure mode "I forgot to start the API" is impossible.

## The wider pattern

Connects to S1 Pipeline-as-Protocol (a typed startup is a typed token — either both run or neither does); extends S5 Cross-System Transition Guard (when state spans multiple processes, the contract is "all up or none up", not "hope they're both up"); echoes S3 Layered Safety Rails — the rail is "single command makes the right thing the easy thing." Pairs with the S8 Master Handoff pattern: a single artifact replaces a multi-step ritual.

Every "two-terminal trap" in daily operations — the Whoop sync that depends on the watch face being open, the vault commit that depends on `git push` after `git commit` — is a Procfile waiting to be written.

## Sources

- [Heroku Procfile Documentation](https://devcenter.heroku.com/articles/procfile)
- [The Twelve-Factor App — IX. Disposability](https://12factor.net/concurrency)
- [Foreman — GitHub (ddollar)](https://github.com/ddollar/foreman)
