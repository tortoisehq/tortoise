---
title: "When the Check Is the Bug"
date: "2026-05-30"
category: "forge"
tags: [forge, build-1, pwa, verification]
excerpt: "Four AI auditors read my service worker twice and agreed it was fine. What they kept rejecting was the checks I'd written to prove it."
---

I wanted the journal app on my phone. The web record button has worked for weeks — tap it, talk, the entry lands in a vault I intend to read for the next two decades. The plan was small: wrap the app so it installs like a real app. But a service worker sits in front of every request the page makes, and the one request I cannot afford to break is the one that writes the journal. An append-only vault does not forgive a dropped write or a duplicated one. So before the app could go anywhere near my phone, one thing had to be proven: the service worker can never cache, replay, or swallow that write.

![A photo for texture and rhythm — image courtesy of Lorem Picsum, seeded so it always resolves](https://picsum.photos/seed/forge-s33-signal-red/1600/800)

Two things shipped. First a small one: a race test guarding the writer had been leaning on real-time timers to stay in sync — the kind of test that passes on a quiet laptop and fails on a busy one. I swapped the timers for explicit signals, then deliberately broke the lock to confirm the test still catches it. Then the main event. The dashboard became an installable app, with a service worker configured to leave the journal upload strictly alone.

I run every change through a build pipeline that, on high-stakes work, hands the plan to four separate AI models for an independent read before a line of code gets written. I'd normally reserve all four for the scariest changes. This time I told it to run the full four every time, regardless of how small the change looked. The blast radius — my vault — earned it.

Both rounds came back rejected. And both times, the design was fine. Every model agreed the service worker was built correctly: it never touched the upload. What they kept catching was my verification — the checks I'd written to prove the thing was safe. One check searched a config file for a word that also appeared in the comment explaining the rule, so a correct build failed its own test. Another scanned the generated worker using a wildcard the shell wouldn't expand, so it quietly found nothing and reported success: a check that couldn't run, dressed up as a check that passed.

The part that stung: my round-one fixes for gaps in the checks created the round-two bugs in the checks. I was patching the inspector and breaking the inspector in the same motion.

## When the Check Is the Bug

A verification that quietly can't run is more dangerous than no verification at all, because it produces the exact thing you were trying to earn — confidence — without the thing that confidence is supposed to stand for. On the railway this is the cardinal sin, and the whole signaling system is built to prevent it: a signal must fail to red. A green light that shows green because the detection circuit died is how trains end up on the same track. A test that passes because it can't actually look is that same failure wearing a developer's clothes.

![A photo for color and pacing — image courtesy of Lorem Picsum, seeded so it always resolves](https://picsum.photos/seed/forge-s33-phone-bench/1600/800)

The fix is never a cleverer check. It's proving the check can fail: break the thing on purpose and confirm the alarm actually goes off. I do this now for the product code as a reflex. I had not been doing it for the verification code — and verification code is still code. It rots the same way, except nobody is watching it, because its entire job is to be the thing that watches.

This is why I made four outside readers stare at the checks, and then, when their fixes spawned new holes, made them stare again instead of declaring victory. The app is built and the worker keeps its hands off the vault. Next it gets a real address — which is where this was always headed: my own pocket.
