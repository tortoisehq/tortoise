---
title: "Good Pipelines Get Smaller"
date: "2026-06-14"
category: "evolve"
tags: [evolve, pipeline, ai-collaboration, subtraction]
excerpt: "Ten sessions of evolving my build pipeline, and the upgrade was negative lines of code — plus two more agents to catch what I miss."
---

![Arc 1: the build pipeline got smaller — the teaching layer and nine backlog docs removed, net negative lines.](/images/evolve-arc1-got-smaller.svg)

For ten sessions my build pipeline had a second job nobody asked it to keep. Every time it shipped a feature it also stopped to write a business lesson. Every time it closed a session it ran three teaching experts and updated a curriculum. The pipeline built things and it taught — and the teaching had quietly grown into its own machine bolted onto the side of the one that worked.

This arc, I took it off.

The whole teaching layer came out. Nine stale planning docs got retired. The lessons weren't lost — they're archived — but the pipeline that runs every day got lighter. The commit that landed it added 546 lines and deleted 675. The upgrade was subtraction.

That's the part that feels wrong until you've done it. We're trained to measure progress in things added. But a process you run every single day pays rent on every rule it carries. A check that never catches anything isn't free — it's camouflage for the checks that do. Cutting the dead weight is the work, not the tidying after it.

## Good pipelines get smaller

![One reviewing agent became three: Claude dispatches, Codex executes and compiles, Gemini reads it cold — sharing one repo.](/images/evolve-arc1-one-to-three.svg)

The other half of the arc was the opposite move: I added agents, not features. The pipeline used to be one model reviewing its own work. Now three review it — Claude dispatches and designs, Codex executes and compiles against the real repo, Gemini reads it cold from a different vendor. They share one git repo and I relay between them.

It earned its place on day one. When I stripped the teaching layer, I missed something. One of my own helpers looked at a line that staged a now-deleted file into every commit and called it harmless. It wasn't — it would have broken every future close. My single agent shipped that miss. Codex caught it in minutes. Gemini caught the same class on its own. Two strangers to my blind spot found what I couldn't.

So the arc added one rule to the machine that builds the machine: right-size the ceremony. Before any new check, gate, or document earns a place, it has to prove the failure it catches is worse than the cost of carrying it. Default to cutting.

If you maintain anything that has to keep running — a deploy script, a checklist, a process a team inherits — the same two moves apply. Subtract what stopped paying its way, and get one more set of eyes that doesn't share your blind spots. The machine that criticizes itself is the only one that gets better.
