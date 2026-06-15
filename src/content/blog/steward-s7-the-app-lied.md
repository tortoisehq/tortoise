---
title: "The App Said It Failed. It Hadn't."
date: "2026-06-15"
category: "forge"
build: "steward"
tags: [forge, building-in-public, debugging, mobile]
excerpt: "A voice app for rail workers finally ran on my phone — after it spent the afternoon insisting it had failed when it actually hadn't."
---

![The Steward dashboard running on the phone: "Speak it once — we'll help you file it right."](/images/steward-s7-the-app-lied.jpg)

For anyone just tuning in: I'm building a voice app for rail workers. You talk into your phone about getting hosed on a shift, it asks a few questions back, digs the exact rule out of the union agreement, and hands you a grievance ready to file. The brain's worked for a while. Last session the whole voice loop got built and merged. This session was supposed to be the easy part: watch it run on my actual phone.

It was not the easy part.

First the phone wouldn't take the app. Samsung blocks anything that didn't come from the store, in three ways, and turns the blocks back on after you turn them off. No cable, though: you can push the app over wifi instead, and Samsung's gatekeeping never gets a vote.

Then the real wall. Every recording went red: "Something went wrong on our side." So I looked on our side. Server up. Logged in. Microphone allowed. Database fine, AI key fine. The server's own access log gave it away — the request from the phone never arrived. Never sent. The app was quitting before it called anything, and blaming the server.

So I stopped trusting the app's story and read the phone's own system logs while I recorded. There it was, in plain text the phone had been writing the whole time: the on-device speech engine heard me perfectly, had a clean transcript, and then fired a junk error the instant I hit stop and the mic shut off. My code caught that error and threw the finished transcript in the garbage.

## Trust the Machine's Logs Over Your Own Error Message

Two bugs hid in one sentence. The first: my app had crushed every failure — mic, network, server, a hiccup on shutdown — into the same vague line, and it pointed at the one place that was healthy. An error that can mean anything means nothing. The truth sat one layer down, in logs the phone kept without being asked. When the surface you built starts lying, drop to the layer that can't.

The second is the one I keep thinking about. The work was already done before the error fired. The failure was in the cleanup, not the listening — and my code treated "the last step flickered" as "the whole thing failed," and deleted a finished job. The fix was a few lines: keep what the recognizer hands you, and if it coughs on the way out but you already have the words, use the words. Only call it a failure when you got nothing. That pattern is everywhere — a file fully written before the handle fails to close, a payment that clears before the receipt screen crashes. Don't let the last step erase the work.

So I held the transcript, rebuilt, pushed it back over wifi, and talked a grievance into my phone. The words showed up as I spoke. I tapped stop, and the cited report built itself right there in my hand — the first real one this app has made from a voice, start to finish, on the device. It lives on the phone now, which changes the next stretch more than any single fix: every change gets tried where it has to survive, not on a clean desk. The loop works. Next I find out if it's any good.
