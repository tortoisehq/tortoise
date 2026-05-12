---
title: "The Calculator That Printed 12"
date: "2026-05-11"
category: "encode"
tags: [encode, building-in-public, cs50p, python]
excerpt: "Expected 3, got 12. The fix was one word — but the lock was watching the bug fire on my own machine."
---

![A photo for color and rhythm — image courtesy of Lorem Picsum](https://picsum.photos/seed/encode-e16-calculator-printed-12/1200/600)

Sat down at the keyboard expecting to run a tiny calculator: ask the user for two numbers, add them, print the answer. Type 1, type 2, see 3 — that was the plan.

What I got was 12.

Same code, same inputs, every time. The interpreter wasn't confused. It was doing exactly what I told it to do — which was the part I didn't yet understand.

The line that produced this was four words long: `z = x + y`. Two integers added together. Should print 3. Printed 12. Something in the gap between those two had to be wrong, and the gap is where the lesson lives.

The thing in the gap is `input()`. When you call it, you type at a prompt and hit Enter, and Python hands you back what you typed. But what it hands you back is always a string — text — even when you type a digit. The character 1 came back as "1", the character 2 came back as "2", and the `+` operator looked at two strings and did what `+` does between strings: glued them end-to-end. Concatenation, not math. "1" + "2" is "12", every time.

The fix is one word in two places: `int(input("What's x? "))` instead of `input("What's x? ")`. Wrap each input with `int()` and the strings get converted to numbers before they reach the `+`. Math fires. The output goes from 12 to 3.

## Input Always Hands You A String

That sentence is the whole lesson. It's not a quirk; it's a design choice. `input()` doesn't try to guess whether you meant text or a number — guessing would make it brittle. It captures keystrokes and returns text. If you want a number, you ask for the conversion yourself.

Think of `input()` like a wall outlet. The outlet doesn't care whether you intend to plug in a lamp, a kettle, or a phone charger. Its job is to deliver electricity in a standard format. Whatever appliance you plug in, the outlet provides the same shape of socket. If you need that electricity in a specific form — to charge a battery, boil water, light a bulb — the appliance handles the conversion, not the outlet.

`input()` is the outlet. `int()` is the appliance.

The lock fired in the same shape four times in one session. Read about it in the lecture. Predicted what the broken code would print. Ran the broken code on my own machine and watched 12 appear. Ran the fixed version and watched 3 appear. Four surfaces, one rule. The concept now has more confirmation than I can talk myself out of.

What this session makes possible next is the same shape applied to whatever Python does to me tomorrow: predict, run, watch, lock. The first commit on a public learning repo is in git history. The next one writes itself.
