---
title: "The Rule You Wrote Yesterday Is the Rule You'll Try to Break Today"
date: "2026-04-20"
category: "encode"
tags: [encode, building-in-public, pipelines, tooling]
excerpt: "Encode v1.0 was finished at midnight after a ninety-minute argument. The first real session tried to skip the rules. The rules held."
---

Encode v1.0 was finished at midnight, in a chat where I spent ninety minutes refusing to build it and then built it anyway. The premise is simple: a four-phase pipeline — state-check, intake, teach, closeout — plus a skill called Notes that presses a closed session into a blog post. It's modeled on Forge, the build pipeline that ships code, but adapted for the other side of the house: learning. Python, reading, drills, eventually agent work. The pipeline that builds sits beside the pipeline that learns.

It shipped with a hardening pass. A separate audit chat pulled all eight files apart, found six blocking issues, and I fixed them. Inlined the banned-phrases list that used to live in a missing file. Added a force-close path for orphaned sessions. Synced the exit-trigger lists between the controller and the teach phase. Closed the corrupt-state recovery gap. Wrote down the scope-creep pattern that had produced the whole negotiation — the doc-dumping, the retroactive reframing, the midnight override — as a ladder of tells to watch for. Push to GitHub. Clean commit. Sleep.

Twelve hours later I opened Claude Code in `C:\TortoiseHQ\encode\` and typed `session`. State-check ran. It wrote a fresh state.json, generated a session ID, and asked the canonical intake prompt: what are you working on, and for how long.

I answered with two things in one sentence. CS50P Lecture 0, which was the real plan. And also — I said — paste two old chats and use the Notes skill to push the first blog post. The second half of that sentence is the whole point of this post, because it isn't what Notes does. Notes reads the structured handoff a session's closeout writes. It cannot read pasted chats. It also cannot run while a session is still ACTIVE — that's HARD RULE #3, a line I wrote into the controller the night before, in a chat where I had spent most of ninety minutes arguing that the pipeline needed exactly this kind of protection.

## The Rule You Wrote Yesterday Is the Rule You'll Try to Break Today

The pipeline refused. Session.status was ACTIVE, so Block 5 fired and said no. I typed a second frame — blog post one, an introduction, a starting point, the word I'd explicitly banned from the skill the night before. The skill would have refused its own draft at the safety gate. I was trying to break two rules with one sentence.

The pipeline logged three scope-creep tells in twelve minutes. Tell one: pivoting mid-intake from CS50P to a new goal. Tell two: retroactive reframing of what the session had always been "about." Tell three: pasting a five-hour-old chat transcript to redirect the session's content. All three are documented in the teach phase as the pattern to catch. The file hadn't been used yet. It already knew.

A dispatcher on a busy subdivision doesn't keep two trains out of the same block by remembering which one has authority. The signal system does it. Track authority is handed out one block at a time and the signal behind the authorized train turns red. A forgetful or rushed dispatcher cannot clear a signal the system says should be red; the interlock holds even against the person whose job it is to give permission. The rule doesn't care whether the dispatcher meant well. It cares about what the state actually is.

Rule #3 is the same shape. The skill that publishes cannot run while the session shows ACTIVE, no matter how strongly the operator insists. Not because the operator is wrong. Because the state says the session isn't done, and the state is the only voter that counts. A rule that lives in a file the operator can't overwrite mid-session is a second voter. Without one, the operator negotiates with themselves and wins — they're the only vote.

I didn't watch Lecture 0. The session closed at 5/10, TOOLING, twelve minutes elapsed, three scope-creep tells logged in the state file. The pipeline ran end-to-end for the first time. Intake backfilled from evidence because it never formally completed before the close-session trigger fired. Closeout wrote the SESSION.md you're reading a distillation of. The rules held.

That's the post. The pipeline built at midnight to catch a specific pattern caught the person who built it inside that pattern the very next day, and the interlock was strong enough to route the session somewhere useful instead of somewhere mushy. Next session is CS50P Lecture 0. No pivots. If the pattern shows up again — and the calendar is already set for May 4 — the interlock fires again. That's what it's for.
