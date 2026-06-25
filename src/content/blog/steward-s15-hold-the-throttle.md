---
title: "The Machine Does the Labor. I Hold the Throttle."
date: "2026-06-24"
category: "forge"
build: "steward"
tags: [forge, building-in-public, ai, testing]
excerpt: "Two safety-critical backend pieces, built by an AI pipeline and proven live, plus the six bugs its own reviews caught before anyone got hurt."
---

![The Agentic ForgeLine: six stations on a rail line, REVIEW caught six P0s](/images/steward-s15-hold-the-throttle.svg)

Two backend pieces had been written but never proven. One stored a member's photos under rules meant to keep one person's evidence invisible to everyone else. The other could turn a cited complaint into an email and send it out the door. Written is not the same as working, and neither had been run for real.

So I pointed my build pipeline at both and mostly got out of the way. It scoped each task, planned it, wrote the code in a fresh isolated session that had no memory of the plan, then reviewed its own diff. I stepped in only at the parts that cannot be taken back: applying a change to the live database, and sending the first real email.

The reviews are where it earned its keep. A fresh reader that did not write the code, plus an outside model, caught six real bugs before any of it shipped. A test that would have passed while proving nothing. A recipient field that did not exist. A setting that, left alone, would have mailed every member's private report to a single address. Each one looks fine in a demo and bites a real person later.

## The Machine Does the Labor. I Hold the Throttle.

That split is the point. The pipeline writes, tests, and argues with itself faster than I can read. It does not get to decide what is safe to send to a stranger, or what is allowed to touch live data. Those are throttle moves, and the throttle stays in my hand.

Both pieces are proven now, live, not just written. The line built them. I decided when they were allowed to leave the yard.
