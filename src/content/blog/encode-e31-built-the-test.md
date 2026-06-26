---
title: "When a Lesson's Objectives Are Met, the Lesson Is Done"
date: "2026-06-26"
category: "encode"
tags: ["encode", "building-in-public", "claude", "learning-in-public"]
excerpt: "I scrapped a data cert to learn the tool I already run three pipelines on, and finished the first module by refusing to polish it."
---

I sat down to keep grinding a data-analytics certificate and walked away from it the same afternoon. The cert was fine. It just wasn't the thing I actually needed. I run three pipelines out of a terminal every day — one for builds, one for memory training, one for learning — and the tool sitting underneath all three is Claude. I'd been dispatching trains for months without ever reading the signalling manual. So I closed the cert and started Anthropic's own "Meet Claude" course from zero, inside the same terminal I already live in.

No CS degree here. I'm 36, I came up on rail, and a few months ago the nearest I'd been to a context window was the one on a cab door. So I gave myself one rule for the course: I don't move to the next lesson until I can say the current one back in my own words, out loud, without the page in front of me. Not a paraphrase of the slide — my own framing. If I can't teach it, I haven't got it.

That rule turned the whole first module into something I could clear in an afternoon. Take the context window. The lesson wanted me to understand why it's the constraint everything else hangs off. What I said back was: "a context window is a lot like short term memory for humans, and a context window for AI is how much you can hold at once, and it matters because the more information you can hold at once, the more information you can synthesize, analyze, and use." That's not elegant, but it's mine, and it stuck. Same with the four D's of delegation. I built an actual prompt — Stage, Task, Rules — to get Claude to name a rescued, mildly grumpy bearded dragon, and watching my own scaffolding work is what made it land: "the four D's are Delegation, Description, Discernment and Diligence, and I nailed Description with the bearded dragon being old and grumpy."

Then I hit the trap. The lesson asked which mode handles a job like "read 50 contracts and write a memo." I read "contracts" and "memo," pattern-matched to office paperwork, and answered Chat. Wrong. The answer is Cowork, and the reason I missed it is the whole point: the signal isn't the topic, it's the size of the job. Fifty documents and a synthesised output is a big job no matter what the documents are about. I'd been reading the cargo when I should have been reading the load weight.

![Three bars titled "Size of the Job, Not the Topic": a short green Chat bar for a quick question, a long amber Cowork bar for "read 50 contracts, write a memo" marked as the one I miscalled, and a medium blue Code bar for building software.](./E31-cowork-trap.svg)

The piece that actually felt like understanding, though, was testing. Not "does the output look nice" — real testing. Why you check an AI system against an answer you already hold. Here's how I put it: "you have to test while already knowing the answer, because you need a concrete target to hit. And that can't be subjective — if you're trusting your AI system with a very critical task, a lot like the Stripe mitigation from Fable recently, you need a system that is robust and powerful, and to get that it must take extraordinary amounts of testing that is defined and scoped out. So you have faith and consistency and trust in your AI system." On rail you don't certify a brake by hoping it feels strong. You test it against a known stopping distance, a number you decided in advance, and you repeat the test until the number holds every time. Same shape. The target has to exist before the test, or the test means nothing.

So instead of just reading the objectives back, I built them. Every learning objective in the module became a question on a live quiz on my own site — eleven of them, self-scoring, saved in the browser. And I deliberately planted the Cowork trap I'd fallen into as one of the wrong-answer paths, so anyone taking it can fail the way I failed and feel why. Production over consumption. Reading a thing and shipping a small thing that proves you read it are not the same act, and only one of them sticks.

![A quiz card titled "I Built the Test": the Meet Claude quiz, 11 question dots with one red marking the trap I built in on purpose, self-scoring and saved in the browser.](./E31-quiz-live.svg)

## Momentum across the whole course beats polishing any single lesson to a shine

That's the line I needed and didn't want to hear. My instinct is to sand one lesson until it's flawless before I'll let myself advance — and that instinct is just perfectionism wearing a work jacket. A lesson has stated objectives. When you've met them and can teach them back, the lesson is done. Not perfect. Done. The objectives are the finish line, not the floor you keep re-laying. A course you finish at seventy percent depth teaches you more than one lesson you buff to a hundred and never leave.

Next module is prompting proper, and I'm bringing the same rule: say it back, build the test, then move on before I'm tempted to polish.
