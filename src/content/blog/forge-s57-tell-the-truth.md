---
title: "When My Own App Lied To Me"
date: "2026-06-18"
category: "forge"
tags: [forge, building-in-public, debugging, honesty]
excerpt: "The screen showed 'unscored' while the data sat right there. The bug wasn't the math. It was two screens reading two different truths."
---

This morning my own app lied to me. The Today screen showed my recovery, sleep, and strain as "unscored" — blank, no numbers — while another tab in the same app showed that exact data sitting right there. I built this thing. And it was telling me it had nothing when it had everything.

The reason was sneakier than a math bug. Two screens, two different sources of truth. One tab pulls live from the wearable every time you open it. The other, the daily readout I actually look at, reads from a private vault I'm keeping for years. On my laptop that vault gets filled every day. On the production server, nothing ever filled it. The readout was reading an empty drawer and honestly reporting: nothing here.

So I built the missing piece. A small, locked-down endpoint that pulls the wearable data into the production vault on a schedule. Three independent AI reviewers tore the plan apart before a line was written, caught two real bugs in my first draft after it was written, then signed off. I deployed it, backfilled thirty days, and watched the readout light up. Recovery red, 31%. Sleep short, 40%. Real numbers. The drawer was full again.

![The Today screen after the fix: Recovery red 31%, Sleep short 40%, Day strain 7.11 — real numbers where it used to say "unscored".](/images/s57-today-scored.jpg)

## A Tool Earns Trust By Admitting What It Doesn't Know

![The Insights screen, refusing to guess: "Too early to tell, based on 11 days, unconfirmed." It won't invent a pattern it hasn't earned.](/images/s57-insights-too-early.jpg)

Here is the part I keep coming back to. The fix wasn't "show the data." It was making the app tell the truth about what it has. Open the Insights tab and it says, flatly, "too early to tell, based on 11 days, unconfirmed." It refuses to invent a pattern from eleven days. Most apps would draw you a confident chart. Mine says I don't know yet.

A health tool that lies, even by omission, even with good intentions, is worse than no tool. The bug was a small lie. The fix restored the one thing that matters: when it tells you something, you can believe it, and when it doesn't know, it says so.
