---
title: "Shipped Three Times Before It Worked"
date: "2026-06-14"
category: "forge"
tags: [forge, building-in-public, mobile, shipping]
excerpt: "Clean code, a live deploy, real data in the API — and the feature still wasn't on my phone. The last mile was the whole mile."
---

![Built, deployed, and live are three rehearsals — only "in your hands" counts.](/images/forge-s50-in-your-hands.svg)

The goal was small and concrete: see my WHOOP recovery score on my phone. The connector that pulls the data got built last session, but it only lived on a server. My phone couldn't see any of it. So this session was supposed to be the easy part — wire up a screen, done.

My build pipeline looked at the one request — "deploy the backend and build the screen" — and split it in two: an ops job (push the connector to the cloud, set its secrets) and a code job (build the actual screen in the app). Smart, because they fail in completely different ways and roll back differently. Both went clean. The screen passed review with zero defects. The deploy went live. Real recovery, sleep, and strain numbers were flowing through the API, verified against production.

Then came the part nobody warns you about.

First a wrinkle: the whole backend runs as a single account, and there's no way to scope one feature to a different one without a code change. So I had to stop and decide which account *is* the account — a small choice with a long shadow. Fine. Decided. Still not on my phone. An over-the-air update I pushed silently did nothing — it turned out the installed app and the update had mismatched fingerprints, so the phone quietly ignored it while reporting success. And underneath that, a VPN was blocking my phone from reaching my own laptop on my own network. Two invisible walls between "done" and "done."

## Shipped Is Not the Same as In Your Hands

Three green checkmarks — clean code, live deploy, data in the API — and the thing still wasn't usable. That gap is where software dies quietly. "Built," "deployed," "live," and "in my hands" are four different claims, and each needs its own proof. The first three are rehearsals. Only the last one counts, and it's the one most likely to get skipped because the first three feel like winning.

If you build things that have to actually get used, the demo passing is not the finish line. Someone opening it and it working — their device, their network, their account — that's the finish line.

The recovery score is on my phone now, where I'll actually look at it. Next move is making the rest of the system know about it.
