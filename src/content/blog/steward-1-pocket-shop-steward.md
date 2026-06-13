---
title: "Build Two: A Pocket Shop Steward"
date: "2026-06-05"
category: "forge"
build: "steward"
tags: ["steward", "build-2", "rail", "ai"]
excerpt: "Workhorse was the machine that builds. Steward is the first real tool it helped me make — a pocket shop steward for a railway crew."
---

A conductor comes off a nineteen-hour shift. Somewhere in the night he helped re-rail a train beside a canyon, in the rain. He booked his rest and never got it. He asked for a bunkhouse, and there wasn't one. By the time he tied up he'd been on the clock for nineteen hours straight, and now he's owed a grievance with nothing left to write it. That member is who Build Two is for.

Steward is a pocket shop steward. You talk through what happened — tired, rambling, out of order — and it reads your account against the actual collective agreement, finds every violation the facts support, and drafts the grievance with the exact article quoted. It's built for my crew, and built first for me, because I'm a railroader too.

Build One was Workhorse: the machine that builds. Steward is the first real tool that machine helped me make — not dev tooling for me, but a field tool for people doing hard, dangerous work in bad conditions. This week it learned to interview back. Instead of a dumb form with ten questions, it reads what you already said and asks only the gaps the contract actually needs — one short question at a time, because you're exhausted. In testing it caught a violation I never thought to raise, and named the company's strongest defense before I could overreach.

![Forge has two builds — Build One: Workhorse, the machine that builds; Build Two: Steward, a tool for the crew.](/images/steward-1-two-builds.svg)

The rule that makes or breaks it: cite or stay silent. Every flag quotes real language from the loaded agreement. No invented article numbers. Anything it can't ground, it marks "verify" instead of asserting it. This week I wired that discipline straight into the code — a check that rejects any quote not actually found in the contract. The app proposes; the member or the local chair disposes.

![Cite or stay silent — every quote is checked against the loaded agreement; anything it can't ground is flagged "verify," never asserted.](/images/steward-1-cite-or-silent.svg)

It matters because a wrong citation wouldn't just cost me. It could hurt a coworker standing in front of their boss. Honest beats clever here, every time.

I'm building Steward in the open, the same way I built Workhorse. Early access, and the rest of the story, at lovelearnlift.com.
