---
title: "A Safety Signal That Isn't Wired Is Worse Than No Signal"
date: "2026-05-01"
session: "S11-2026-05-01"
task: "T8-4"
pillar: "P11 Technical Craft × P6 Systems Thinking"
analogy_domain: "MEDICAL-THERAC-25"
excerpt: "A safety mechanism that signals intent but isn't wired to the thing it controls gives the calling code false confidence that protection is in place when nothing is being protected."
tags: [forge-finding, safety, therac-25, signal-vs-action, abort-signal]
---

## The lesson

A safety mechanism that signals intent but isn't wired to the thing it controls is worse than no mechanism — it gives the calling code false confidence that protection is in place when nothing is being protected.

The fix is not adding more layers; the fix is verifying, at each layer, that the signal you created is the same signal the protected operation observes.

## Analogy — RAILWAY: Air Brake Continuity Test

A freight train's air brake works by venting pressure: pull the handle, the trainline pressure drops, each car's local brake valve detects the drop and applies its brakes mechanically. The crucial property is that every car's brake valve is connected to the trainline. If a car's angle cock is closed (perhaps left that way after a yard switch), or its brake hose is unhooked, pulling the handle does nothing for that car — the engineer's intent (stop the train) and the car's behavior (continue rolling) are no longer connected.

Modern locomotives run a continuity test before departure that exists specifically to catch this class: the engineer pulls the brake handle briefly, the EOT (end-of-train device) reports the pressure change at the rear, and only then is the train considered armed. Without that verification step, the engineer can leave a yard with what they believe is a fully-protected brake system but is actually one car short of effective.

## How it landed in T8-4

The Therac-25 medical radiation therapy machine (Atomic Energy of Canada Limited, 1982-1987) overdosed six patients with up to 100x lethal radiation because the operator-facing UI showed a "treatment configured" interlock that wasn't wired to the magnetic deflection hardware. The software flag recording "machine is in electron-beam mode" could be set independently of the actual physical state of the deflection magnets.

A fast operator typing the prescription quickly would set the flag while the magnets were still in X-ray mode, delivering raw electron beam at X-ray intensity to a patient whose body had been positioned for a low-dose treatment. The Nancy Leveson investigation report (IEEE Computer, 1993) became a landmark in software safety because it isolated the failure mode precisely: the safety check was UI-level, not hardware-level. The check measured the operator's stated intent; it did not measure the physical state of the protected resource.

T8-4 fixed three bugs in the journal-recording backend. The biggest one: the code had a "60-second timeout" that wasn't actually connected to the network call it was supposed to interrupt. The timeout would fire — the code would say "OK, we've timed out!" — but the actual request to OpenAI kept running because the cancellation signal was never handed to the OpenAI library. From the outside, every request that should have timed out at 60 seconds instead hung for the full 120-second server timeout before failing.

The fix was passing the cancellation signal to the library as a per-request option (two lines per call site, both libraries already supported it). The lesson is the gap between two claims: "we have a timeout" is a claim about the code's intent. "The library accepts the abort signal we created" is a claim about whether that intent reaches the actual operation. They're not the same thing — and only the second claim keeps the system from hanging.

## The wider pattern

Connects to S6 Measure the Thing, Not Its Shadow (a defense that measures a proxy fails when the proxy can move without touching the underlying state — `withTimeout`'s `controller.abort()` is the proxy; the SDK request is the underlying state). Connects to S7 Bind Lifecycle to the Output Stream (lifecycle events on the wrong surface fire on the wrong conditions — the timeout fired on a controller no consumer was subscribed to). Connects to S5 Cross-System Transition Guard (the typed-token handshake — the signal IS the typed token; without it being both passed AND observed, no handshake actually occurred).

Anywhere code declares an intent (rate limit, retry cap, shutdown sequence, vault-write atomicity), the question is: does the protected resource actually observe the corresponding signal?

## Sources

- [An Investigation of the Therac-25 Accidents — Leveson + Turner, IEEE Computer Vol 26 No 7, July 1993](https://web.stanford.edu/class/cs240/old/sp2014/readings/therac-25.pdf)
- [Therac-25 — Wikipedia](https://en.wikipedia.org/wiki/Therac-25)
- [End-of-Train Devices (EOT) — FRA technical reference](https://railroads.dot.gov/elibrary/end-train-devices-eot-rear-train-marker)
