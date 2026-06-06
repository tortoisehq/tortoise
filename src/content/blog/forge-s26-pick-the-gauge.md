---
title: "Why Lincoln Picked Your React Renderer"
date: "2026-05-19"
category: "forge"
tags: [forge, build-1, architecture, ai]
excerpt: "In 1862 Lincoln signed a law about rail gauges. One hundred and sixty years later it picked my markdown renderer."
---

The markdown library I shipped yesterday crashed the app at boot. Today the only job was to swap it for one that doesn't. Five hundred lines of spec, three external auditors, a four-section teaching artifact, and a near-miss caught five minutes before any code touched the codebase. The shape of the day was supposed to be small. The shape of the day was small. The reason it was small is what I want to talk about.

![Abraham Lincoln, 1864 portrait by Anthony Berger](https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg)

The session opened with a question that sounds absurd until you stay with it. At scale, is a library choice an architectural commitment? My answer used to be no. That is what package.json is for. You can swap things out. Today the answer changed. Here is what changed it.

In 1862 the United States had at least seven different rail gauges. Goods moving between rail lines required physical reloading at every transition. It was a national-economic-development problem. On July 1, 1862, Lincoln signed the Pacific Railroad Act and mandated four feet eight and a half inches as the standard gauge for the transcontinental railroad. Twenty-four years later, on May 31, 1886, the entire American South converted thirteen thousand miles of track to that gauge in a single coordinated day. Ten thousand workers, pre-staged materials, beginning at four in the morning. They had to. The cost of staying non-standard had grown exponentially with the network. Today, one hundred and sixty years later, that 4'8.5" persists as the singular gauge of North American commerce. Every locomotive, every tunnel clearance, every switch assumes it. Reversibility today: zero.

![Pacific Railroad Act of 1862, original manuscript](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pacific_Railroad_Act_of_1862_Original_Manuscript.jpg/960px-Pacific_Railroad_Act_of_1862_Original_Manuscript.jpg)

I picked a markdown renderer this morning. The decision should have taken five minutes. Instead the pipeline ran it through what amounts to a scale test. Would this choice survive at one million users? One billion? The first lens disqualified the obvious option. Pre-render markdown to HTML on the server, send HTML to the client. Simple. Compact. Wrong, because it breaks the encryption promise I made earlier in the program. The server cannot pre-render content it cannot read. The second lens caught what the first missed. Even with the chosen client-side renderer, image rendering opens a remote-fetch surface that turns every entry view into a tracking event at scale. The fix was a fifteen-line custom renderer class that returns a placeholder for any image URL.

The session's biggest moment came at execution time. The spec I wrote referenced the library's API by name. A confident render pattern in two places. The actual export, it turned out, used a different name with a different prop signature. Five months ago I would have shipped the wrong import, hit a silent empty render on the phone, spent thirty minutes diagnosing in logs, and learned the lesson by stubbing my toe. Today the pipeline has a calibration check that forces extraction of the actual contract from the installed package's type definitions before any render code gets written. The check fired live. The error was caught before any code touched the codebase. I was the author of the wrong assumption. The apparatus I built last month caught my own work this morning. That is a strange and good feeling.

## You're 1862. Pick The Gauge.

Every library choice is a gauge choice. At zero users, a renderer swap is reversible. Git revert, swap to something else, no harm. At a thousand users, reversibility starts costing you something. At a million, reverting means coordinating a release-rollout with feature flags and gradual rollback paths. At a billion, the choice is the gauge of 1886. Coordinate the conversion across millions of installs in one day, or live with it forever. The decision you make today is the architecture you will live with at scale.

The discipline this teaches is verify before commit, but at every layer. Architecturally, apply a scale lens before picking the library. Pre-commit, extract the actual contract from the installed code before writing the wrapper. Runtime, wrap the renderer in a fail-closed boundary that catches the inevitable edge case. Pre-deploy, gate the push to your main branch behind a real device test that catches what your type checker cannot. Each layer's mechanism is different. The discipline is one. When you see a system where catastrophic failures are nearly impossible, it has all four layers, and each layer's failure mode is named and understood.

The Tortoise program is a 24-month build out loud. Locomotive engineer by day, building daily-practice software on the side. I started it without a CS degree, with a notebook and a railway dispatcher's mental model. The dispatcher gives signals; the engineer reads their own sensors before throttling up. That is the same shape as the pipeline I ran today. The 1862 Congress chose the country they wanted in 1900. The teaching format I just inaugurated will produce a similar artifact for every session through the next fourteen. Small pieces that compound into a curriculum. What I am choosing today is the version of me that has built five more pillars on top of this. The library is small. The pattern of pre-evaluating dep choices at scale is the foundation that compounds.

What this unlocks: encrypted journal entries can render client-side without server-side rework. Image content stays out of the analytics surface. The audit cycle proved it can catch its own author's confident-sounding errors before they ship. And the curriculum has a first lesson on disk.
