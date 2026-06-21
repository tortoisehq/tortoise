---
title: "A Retry Should Change Nothing"
date: "2026-06-20"
category: "forge"
build: "steward"
tags: [forge, building-in-public, rail-engineer, idempotency]
excerpt: "A tired railroader double-taps 'send' on bad signal and files the same grievance twice. Tonight I killed that bug — after the robots caught me getting it wrong."
---

A guy I run rail with taps "send" on a grievance from out in the yard. Bad signal. Nothing happens — or it looks like nothing happens. So he taps again. Now there are two grievances sitting in the system, identical twins, and the AI that wrote them up got paid twice for the same paragraph. That's the bug I set out to kill tonight. I'll say it up front like always: I run locomotives, not databases. Still a noob at this.

The fix has an ugly word — idempotency — and a dumb-simple idea underneath it: doing a thing twice should land the same as doing it once. Every submit now carries a little random tag. If the same submit comes back — a double-tap, a dropped signal, a "try again" after the phone gave up waiting — the server looks at the tag, shrugs, says "you already filed that one," and hands back the report it already has. Filed once. Billed once. And still sealed so no member can ever see another member's.

![Without idempotency, three taps on bad signal file two identical grievances and bill the AI twice; with it, the same three taps file one grievance, billed once.](/images/steward-s12-file-it-once.svg)

Here's the part that stings. My first design was wrong. I had the app make a fresh tag on every tap, which works perfectly right up until the one moment it matters: you hit "try again" after a timeout, the phone mints a brand-new tag, and you've filed twice anyway. I didn't see it. The machines did. Five hard passes from one model came back and said, plainly, this does not do what you think it does. Fixed before a line of it went near anyone's phone.

## A Retry Should Change Nothing

That's the whole idea, and it's bigger than my little app. Anything that can be tapped twice or resent — a payment, a text, a grievance filed by a wrecked guy at 2 a.m. — has to treat the second try as a shrug, not an event. The railway has known this forever. You don't get two trains because somebody pulled the lever twice. The signal already cleared. The second pull does nothing, on purpose.

And I didn't stop at green checkmarks on my laptop. We took it all the way to the live database tonight and ran it for real — two different members, the same retry — and it held, eight for eight. One grievance. Billed once. One member walled clean off from the other.

![The live two-member test, run on the production database, passing eight checks out of eight.](/images/steward-s12-proven-live.svg)

Built isn't done — but this one is. It's live, and it's proven. The next signal down the line is making the rest of the back end this hard to break.
