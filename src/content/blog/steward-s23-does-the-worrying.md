---
title: "The Dashboard Does the Worrying"
date: "2026-07-02"
category: "forge"
build: "steward"
tags: ["steward", "building-in-public", "ai", "rail"]
excerpt: "A tired railroader opens Steward asking one thing: what do I do right now? The new home screen puts the filing deadline first — and never fakes it."
---

A tired railroader opens an app after a bad shift with one question in their head: *what do I need to do right now?* So that's the only question Steward's new home screen answers — fast, one-handed, in a couple of seconds.

We built it in the open, side by side. I put a clickable mockup in the browser, my phone on the desk, and the real union portal up next to it. Then we iterated live — move this, shrink that, mirror the sections the crew already knows. No guessing. The crew shouldn't have to learn a new map; they already live in the union site every day, so Steward wears the same layout: the same menu, the same sections, the same familiar buttons.

![Steward's home: a red filing-deadline alarm on top, four submit buttons, an Ask Steward voice bar, and a grievance list sorted soonest-deadline-first.](/images/steward-s23-dashboard.svg)

The one thing the union site *doesn't* do, we added: a deadline alarm at the very top. Miss a filing deadline and a real grievance dies — so the soonest one is always the loudest thing on the screen, and the list sorts soonest-first so nothing hides behind something newer. When a clock is ticking, it shouts. When you're clear, it says so plainly.

## Never Let the Screen Lie About Time

The rule underneath it all: the countdown is never faked. Every "5 days left" comes straight from the backend that actually knows — never a number the app made up. I locked that with a test before it shipped, because a wrong deadline doesn't hurt me. It hurts a stranger who trusted it.

Speak it once. Steward helps you file it right — starting the moment you open it.
