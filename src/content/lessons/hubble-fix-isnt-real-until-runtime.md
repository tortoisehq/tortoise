---
title: "The Fix Isn't Real Until Runtime Confirms It"
date: "2026-05-03"
session: "S13-2026-05-03"
task: "T13-1"
pillar: "P10 Reality Testing × P11 Technical Craft"
analogy_domain: "SPACE-HUBBLE-1990"
excerpt: "Static review of the diff proves the change exists; only running the actual flow proves the change works. The bug fix isn't real until a runtime exercise confirms it."
tags: [forge-finding, verification, hubble, runtime-truth, fix-vs-diff]
---

## The lesson

A bug fix isn't real until a runtime exercise confirms it. Static review of the diff proves the change exists; only running the actual flow proves the change works.

The diff is a claim about code. The runtime is a claim about behavior. They are not the same claim.

## Analogy — RAILWAY: The Load Test

A locomotive overhaul ends not at the shop bench but on the test track. Mechanics rebuild the prime mover, QA passes every spec on the dyno, and the unit looks brand-new. But before the locomotive returns to revenue service, it must pull a measured train consist up a real grade with a real load.

The bench can certify horsepower; only the load test certifies the unit can actually do its job. The fix isn't real until the engine moves a train up a hill.

## How it landed in T13-1

The Hubble Space Telescope mirror fix (1990–1994).

Hubble launched April 24, 1990. First images came back blurred — the primary 2.4-meter mirror was 2.2 micrometers off-spec at its edge (spherical aberration). Cause: the NULL CORRECTOR ground-test apparatus had a manufacturing flaw, so static QA had been measuring the mirror against a defective reference. The mirror passed every ground test against the wrong yardstick.

NASA and Ball Aerospace designed COSTAR (Corrective Optics Space Telescope Axial Replacement) — five mirrors the size of a phone booth — installed during STS-61 in December 1993 (5 spacewalks, 35 hours of EVA, the most complex servicing mission flown to that point).

The fix was *not* declared real on the launch pad. Not after install. Not even after powering up the new optics. The fix became real on January 13, 1994, when the first post-COSTAR images came back sharp. Three years and three months from problem identification to verified fix. The diff existed in 1991 (early COSTAR designs). The *fix* existed in 1994 when the runtime confirmed it.

T13-1 was the slower, harder check after the journal-recording backend was fixed at six different points in May. Each fix had its own focused test. T13-1's job was end-to-end: open the dashboard, press a button, talk for 30 seconds, see if the words land in the file. The fix had been "done" for three days. T13-1 was when it became real.

## The wider pattern

Extends S6 "Measure the Thing, Not Its Shadow" (gates that check the right dimension) and S7 "Bind Lifecycle to the Output Stream" (lifecycle bound to the right surface) — both prior P11 lessons about Type B vs static gates.

New angle: T13-1 is about *fix verification* (proving a fix landed) rather than *bug discovery* (proving a guard works). Different shape; same family.

Anywhere a change is "committed" without a runtime exercise, the change exists in source control but doesn't necessarily exist in the system.

## Sources

- [Hubble Space Telescope Servicing Mission 1 — NASA](https://www.nasa.gov/mission/hubble-space-telescope-servicing-mission-1/)
- [Servicing Mission 1 — HubbleSite](https://hubblesite.org/mission-and-telescope/servicing-missions/servicing-mission-1)
