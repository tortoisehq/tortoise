---
title: "Build the Thing, Then Let Reality Test It"
date: "2026-06-08"
category: "forge"
tags: [forge, building-in-public, ai, testing]
excerpt: "I spent a whole session perfecting the plan for one safety feature. Then I built it, and one real run told me what eight rounds of planning couldn't."
---

I'm building a tool that turns a wrecked rail worker's spoken account of a bad shift into a filed grievance. Talk into your phone after nineteen hours on duty, get back a cited, fileable complaint. The one thing it can never do is cite the wrong part of the contract, because a wrong citation doesn't hurt me. It hurts a stranger whose case I just weakened.

![A locomotive feeling its way through fog. One green lamp on the signal says proceed; every other state of it says stop. Cite, or stay silent.](/images/steward-1-hero.png)

This session was supposed to finish the engine: let it read the entire collective agreement instead of a small slice I'd hardcoded, and put a hard check in front of every citation so nothing ungrounded ever reaches a member.

Instead I spent most of it writing instructions for building that, then having a second AI read those instructions cold and tear them apart, then rewriting. Eight times. And every round found something real. A field the check forgot. A way a fabricated quote could slip through. A test that passed green while the thing it was testing was broken. It felt like diligence. Look how careful we're being.

Then I stopped and actually built it. One pass. The free tests went green, and I ran it once for real against the actual agreement.

That single run told me in thirty seconds what eight rounds of arguing about the plan never could. The parser read a garbage-formatted contract PDF and pulled the right sub-sections cleanly. And on a live call, the model tried to ship a citation it couldn't back up, and the check caught it and threw it out. Cite-or-stay-silent, working, on real input.

![The agreement open under the lamp, one clause circled and checked. Beside it, the pile of drafts I threw out getting there.](/images/steward-1-check.png)

## Build the Thing, Then Let Reality Test It

The questions that actually mattered were never answerable on paper. Can the parser survive a real, messy document? Will the safety check behave when a live model hands it something wrong? You don't learn that by re-reading a spec. You learn it by running code against the real thing.

Planning has a point where it stops removing risk and starts removing your evening. With an AI partner that hazard gets sharper, because it will cheerfully produce revision nine of the plan, and revision ten, and call each one an improvement. The skill isn't writing the careful plan. It's noticing the moment the careful plan has become a way to avoid the scary part: shipping something that might be wrong and learning from exactly how it's wrong.

The discipline that protects the stranger stays. The check is strict, it fails closed, and I'd defend every line of it. What goes is the treadmill of perfecting the description of the check instead of pointing the check at reality.

The part of this you could actually hold is still missing. There's no app yet. But the engine underneath it is real now, and it's been proven against the real contract instead of against my own confidence. Next, the thing in your hand.
