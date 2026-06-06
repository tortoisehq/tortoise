---
title: "Three Frames, Three Bugs I Couldn't See"
date: "2026-05-15"
category: "forge"
tags: ["forge", "build-1", "ai", "audit"]
excerpt: "A one-day foundation build where three external AI auditors caught three production-blockers I would have shipped without them."
---

![Railway switch track at dawn — multiple lines converging, signal lights ahead](https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80)

The plan today was small: scaffold a React Native app, three placeholder tabs, runs on my phone. The foundation for the commercial version of a project I've been building solo on the side for a few months. No auth, no data, no audio yet — just enough to prove the toolchain works, then layer the real features over the next four to six weeks. I wrote the prompt, ran it past my internal review checklist, and would have shipped it.

The internal checklist flagged four advisory issues. Nothing serious. Then I ran the same prompt past three external auditors in parallel — Gemini, Claude, and ChatGPT — and they came back with seventeen findings between them. Three were production-blockers. One would have crashed the app on first launch with a red error screen. One would have hung the build silently waiting for an interactive prompt no automated session can answer. One would have shipped a package deprecated eighteen months ago, baking debt into the next two builds.

Each of the three lived in a different blind spot. The first was a framework-contract assumption I had wrong. The second was an out-of-date assumption about CLI tool packaging from a previous SDK version. The third was an assumption about ecosystem deprecation timelines I hadn't checked. Three different frames, three different bugs, all invisible to me in the moment of writing the prompt. My internal checklist couldn't have caught them either — it checks structure, not domain knowledge.

## Three Frames Beat One on Foundation Work

Rail operations figured this out a century ago. The engineer who drove the train doesn't inspect the track at end of run — they've already seen what they expect to see. Someone else with a different frame walks the track. Aviation runs the same play; post-incident reviews are staffed by pilots who weren't on the flight, because the people who were on the flight share the assumptions that led to the incident. The reviewer is structurally distinct from the operator. Different frames see different things.

I lean on AI for review in part because I'm working solo. No engineering team, no peer to bounce off. The discipline I codified today is to use three at once — three different model families from three different vendors, each with different training data and different default frames. Each saw what the others missed. Diverse-frame review isn't ceremony for the surface, it's insurance against the assumptions that built the surface.

The cost flips on foundation work. Running three audits on a small surface looks like overkill — until you realize the surface stacks. Every subsequent feature lives on whatever you shipped today. The fix surface is small; the blast radius is the next twelve weeks. That's the math that justifies the audit cost: pay forty minutes today, save hours of debug plus three non-fixes shipping into the foundation of everything you build next.

The scaffold I shipped is six author-written files. By itself, not much. What it represents is the discipline behind it — ship small, run external review, trust diverse frames over your own confidence. The next session adds auth. The session after adds audio. Each layer earns the right to add the next.
