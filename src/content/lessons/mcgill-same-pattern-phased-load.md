---
title: "Same Pattern, Phased Load"
date: "2026-05-12"
session: "S21-2026-05-12"
task: "T21-1"
pillar: "P15 Execution & Shipping Discipline"
analogy_domain: "REHAB-MCGILL-PROTOCOL"
excerpt: "Ship the minimum viable substrate that unlocks the mission now — and design it honestly so the upgrade rides alongside operations. The temporary load isn't a compromise; it's the doctrine."
tags: [forge-finding, right-sizing, mcgill, phased-load, pattern-continuity]
---

## The lesson

Ship the minimum viable substrate that unlocks the mission *now* — and design it honestly so the upgrade rides alongside operations, not as a rewrite that stops the work.

The temporary load isn't a compromise; it's the doctrine that keeps the pattern alive through the rebuild.

## Analogy — REHAB: Post-Spinal-Fusion Return to Squat

T21-1's fire-and-forget transcription chain is your bodyweight squat after surgery. The movement pattern is the same — hip hinge, knee track, brace, depth, drive. What changes between "first day back" and "loaded barbell" isn't the squat, it's the substrate carrying the load (your body alone → empty bar → goblet → front squat → back squat).

The mission (train the pattern, build back to compound lifting) never stops. You don't say "I'll wait until I can back-squat 315 to start training the squat again" — that's how you lose the pattern forever. You ship the bodyweight version, designed so each progression slots in without re-teaching the movement.

## How it landed in T21-1

Stuart McGill's spine rehab protocol, codified 1986–2015. McGill is Professor Emeritus of Spine Biomechanics at the University of Waterloo Faculty of Kinesiology, where he ran the Spine Biomechanics Laboratory for 30 years. His published work (~245 peer-reviewed papers since 1986) established that the squat-pattern-without-load is the *foundation* of return-to-lift after disc injury or fusion — not a compromise version of squatting, but the load-bearing baseline that all heavier work refines.

The documented case: Brian Carroll, US powerlifter, herniated L4-L5 discs around 2009, was told by multiple orthopedic surgeons he'd never squat over 600 lb again (he'd been at 1100+ in competition). Carroll worked with McGill's protocol — McGill Big-3 (curl-up, side-plank, bird-dog), then progressive loading of the squat pattern starting from bodyweight, then unloaded barbell, then small jumps. Same movement pattern at every stage; what changed was the load. By 2014, Carroll had returned to USAPL competition and squatted over 800 lb.

At no point did Carroll "stop training" while waiting for permission to load heavy. He trained the squat the whole way. The substrate (load) was phased. The pattern was continuous.

T21-1 ships a working voice-journal pipeline today by using simple infrastructure (a JSONL file as a "state log" instead of a proper database table) so the operator can call the truck number and see the transcript in the vault tomorrow. The state log is designed with the exact same columns it'll have when it becomes a real Supabase queue table at S25 (recording_sid, storage_key, status, attempts, last_error, vault_path, idempotency_key, created_at, updated_at). The S25 migration isn't "redesign and rebuild" — it's "move the data, keep the pattern." Same lift, heavier load.

## The wider pattern

Extends S15 Right-Size the Protocol (Path A is the right-sized version of T21-1's architecture; full queue table would over-engineer for solo-truck phase) and S18 Path 4 / Truck-Use Milestone Discipline (alpha-user surface comes before backend perfection).

Connects to S20's Harness-Level Enforcement vs Voluntary Practice principle: the state log's append-only schema isn't *enforced* by code today (no Supabase RLS), but it's *designed* to be enforced once it moves to the queue table at S25 — same arc as McGill's protocol, where the pattern discipline starts voluntary (you have to honor the form) and becomes structural (the heavier load itself enforces correct mechanics).

## Sources

- [Stuart McGill — University of Waterloo faculty profile + publications](https://uwaterloo.ca/kinesiology-health-sciences/profile/mcgill)
- [Back Mechanic — Stuart McGill (2015) — Backfitpro](https://www.backfitpro.com/books/back-mechanic-stuart-mcgill-low-back-pain/)
- [Gift of Injury — Stuart McGill + Brian Carroll (2017)](https://www.backfitpro.com/books/gift-of-injury/)
