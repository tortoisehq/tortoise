---
title: "Spar With Somebody Who Wants To Win"
date: "2026-06-17"
category: "forge"
build: "steward"
tags: [forge, building-in-public, ai-collaboration, testing]
excerpt: "I built the backend that interviews a tired railroader by voice, then let two other AIs try to break it before it shipped."
---

![Steel rails converging under an amber voice waveform on a dark field](/images/steward-s8-spar-before-you-ship.svg)

A railroader at the end of a long shift should not have to sit down and type out a grievance. He should be able to talk. And the thing in his pocket should talk back, ask the right question, one at a time, the way a good union rep who knows the book would. This session I built the part that runs that conversation.

The work itself is plain. A backend that takes a spoken account, asks the next question, and stops itself after eight so it can never run up a bill or loop forever. It does not trust a thing the phone sends it. Solid, boring, safe. That is the goal.

Here is the part worth telling. Before it shipped, I put it in the ring. Grading your own work is hitting the heavy bag, and the bag never hits back. So I brought in a couple of other AI models, running on subscriptions I already pay for, and gave them one job: try to beat this.

They did. One found a test I wrote that would have failed good code, a check that punched itself in the face. Another found a line in my commit that would have quietly shipped a password into the repo. I had looked three times and missed both. You always miss your own blind spot. That is why it has a name.

## Spar With Somebody Who Wants To Win

You do not learn your work can take a hit by standing back and admiring it. You learn it by letting somebody swing who is actually trying to land one. A polite reviewer who agrees with you is worth nothing. The one who tries to knock you out, on purpose, before it counts, is worth everything.

Anybody building something that has to hold up should find that person, or that machine, and it cannot be you. Fix what they land. Then go.

I fixed what they landed. Shipped it live tonight. Next, the phone learns to talk back.
