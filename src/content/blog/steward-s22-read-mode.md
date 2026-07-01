---
title: "Steward Learned to Read"
date: "2026-07-01"
category: "forge"
build: "steward"
tags: ["steward", "building-in-public", "ai", "rail"]
excerpt: "Steward could only file grievances. Today it learned to answer — find the exact article, or stay honest and say it can't."
---

For weeks Steward could do one thing. It listened to a tired railroader talk through what happened to them, and it turned that account into a filed grievance. Powerful, but one-way.

Today it learned the other half. To answer. You ask it a question about your collective agreement, out loud, and it finds the exact article and reads it back. You ask something it can't ground, and it tells you plainly: "couldn't ground that." It would rather stay silent than cite the wrong rule, because a wrong citation doesn't hurt me. It hurts a stranger who trusted it.

![Speak a question, find the exact article, and get a cite-verified answer or an honest "couldn't ground that" — it never guesses.](/images/steward-s22-read-mode.svg)

I built the whole thing in one sitting. The search first. Then the tuning, so real questions actually land: "can I book rest after 11 hours?" returns the right article. Then the screen on the phone, with a microphone and a read-aloud button.

## Invite the Smartest Adversaries Before You Ship

The part I'm proudest of isn't code. Before shipping, I handed the plan to four different AI models and told them to attack it, not approve it. They found two holes I could not see. One of them let the finder quote the wrong crew's contract entirely — a valid-looking citation from an agreement that isn't yours. I would have shipped it. They caught it. Fixed, re-audited, deployed.

That is the method now, and it works for anything you build that someone leans on. Build fast, then bring in the sharpest critics you can find and pay them in attention, not applause. An empty bug report has to be earned. The cheapest way to find the failure you can't see is to ask a mind that didn't design it.

It's live. Next: put it in a real railroader's hands and watch what breaks.
