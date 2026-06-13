---
title: "Built Is Not Deployed"
date: "2026-06-13"
category: "forge"
build: "steward"
tags: ["forge", "building-in-public", "steward", "deploy"]
excerpt: "I built the lock on the door, proved it held, and merged it. Then I told myself it was live. Half an hour of a dead server says otherwise."
---

Steward turns a wrecked rail worker's spoken account of a bad shift into a filed grievance. The one thing it must never do is let one member see another member's case. This session built the lock on that door: a real login, a verified token checked on every request, and a database rule that isolates each member's rows even when the code above it has a bug. I built it, reviewed it twice, and proved the isolation with a live test: two members side by side, neither able to read the other. Then I merged it and told myself it was live. It wasn't.

The code came in clean. A biometric lock that re-covers the screen when the phone drops to the background, so a device left on a tailboard stays shut. A token-refresh path that tells a dead session apart from a flaky signal, so a tunnel doesn't log you out mid-shift. A fresh-eyes review caught five real problems before they shipped; the merge had zero blocking findings. The code is the easy part. It almost always is.

The mistake was one sentence. I said the push deployed it. Pushing code to where it's stored is not the same motion as putting it on the running server, and on this project those are two different hands. I knew that. It's written in my own notes. I ran it anyway, blind, without checking how this server takes a build. It started the phone app where the backend should be; the service went dark and stayed dark until I rolled it back to last week's version.

## Built Is Not Deployed

Built, merged, deployed, live. Four states, four separate proofs. A green test and a clean merge prove the code exists and sits in the trunk. Neither proves a single byte is running where a real person can reach it. On the railroad, an engine signed off in the shop is not an engine coupled to a train, and that is not an engine pulling tonnage down the main. You don't jump from the inspection sheet to "we're moving freight" because the paperwork looks clean.

So the fix isn't "be more careful." When I don't know how a thing deploys, that's not a gap to cover with a confident sentence. It's a red lamp, and you do not roll past a red lamp because you're fairly sure the track ahead is clear. The lock holds; it went through the discipline. The deploy didn't, because I skipped it. Next session starts there, on the ground, before a single member ever logs in.
