---
title: "Fix the Affordance, Not the Human"
date: "2026-04-29"
category: "forge"
tags: [forge, build-1, dev-environment, rail-engineer]
excerpt: "Opened my own dashboard and got a 500. The fix wasn't a bug fix. It was admitting the system was lying to me about what it needed to run."
---

I opened the dashboard I am building, the one I read back to myself the way some people read back their own journals, and the page rendered an error card. "Couldn't load the Mirror — mirror stream failed: 500." A retry button, ready to fail again.

There was no actual five-hundred. The dashboard runs on one process. The API it calls runs on another. The dashboard was up. The API was not. The proxy in between, dutiful as a junior dispatcher, took the silence on the line and reported it as a server error to the client. I had started one process and walked away. The other process had been waiting for me to come back.

This is the kind of thing nobody writes down. The README does not say "remember to start two terminals." The package.json does not say "this is a multi-process system." The fact that two things must be running for one thing to work lived only in my head. And my head, after a long shift, is not a reliable index of every implicit dependency in every project I am building.

I typed five sentences into my build pipeline. "start forge - run until fixed - dont ask me anything - pick the best chices -- if unsure resasech." Then I went to make coffee. The pipeline ran the full intake, classified the change as low-risk, did a structured pre-execution breakdown, ran every alternative through the trade-off slot, made the change, verified it with a curl chain against the live process, wrote the handoff, committed both sides. By the time I was back at the keyboard the bug was gone and a lesson file was sitting in my vault about Heroku's Procfile.

The fix was not a code fix. The fix was one line of new configuration that says, every time I want to run this thing locally, both processes start together as a single unit, and if either one dies the other dies with it. One command. Either both run, or neither does. The failure mode that surfaced today — "I forgot to start the API" — is now structurally impossible.

## Behavioral Architecture Beats Human Reliability

When a system requires you to remember a step that has no enforcement, the system has an undocumented dependency that will fail silently. The fix is not to train yourself to remember it. The fix is to redesign the affordance so the dependency is visible AND mechanically enforced.

This is not new. Heroku codified it in 2011 with the Procfile. Every app on Heroku declares its processes — web, worker, scheduler — in a single manifest, and the platform starts them all together. Foreman brought the same pattern to local dev. The whole twelve-factor app movement has Factor Nine, Concurrency, which says explicitly: the app declares all its processes; the platform runs them as a unit. Docker Compose has `depends_on`. Systemd has `Requires=` and `After=`. Every layer of distributed computing has converged on the same idea — declare the dependency in a manifest the runtime executes, instead of letting the dependency live in human memory.

I work as a rail engineer in my other life. A diesel locomotive needs two systems running before it can move. The prime mover, which is the engine itself, and the auxiliary generator, which feeds the traction motors and the brakes and the lights. On older units the procedure was two-step. Crews would start the engine, walk away to throw a switch for the auxiliary, and on cold mornings half the time they would come back to a unit that looked alive but could not move. The fix was not crew training. The fix was a single starter sequence that brought both systems up together. One handle. Both online or neither.

This pattern shows up everywhere once you start looking. Every "I always forget the second thing" workflow is a Procfile waiting to be written. Whoop sync that depends on the watch face being open. Vault commit that depends on remembering to push after committing. The deploy script that builds but does not actually deploy unless you run a second command nobody documented. The fix is never to train yourself harder. The fix is to make the second thing impossible to forget by tying it to the first.

For my project specifically — every time I add a new runtime process, it goes into the startup manifest the same day. The worker queue I will need for the agent loop. The scheduler I will need for daily summaries. The webhook listener I will need for connectors. They go in the manifest before they go in the codebase. The rule is not "remember to start it." The rule is, if it is not in the manifest, it is not part of the system.

The thing that shipped today is six lines of npm config and one new dev dependency. The thing that actually shipped is a small expansion of what I refuse to accept as a normal failure mode. I am no longer willing to accept "you forgot to start the API" as a class of bug in a system I am building for a twenty-year arc. The cost of remembering is real, the cost of forgetting compounds, and the cost of the fix was about ten minutes of pipeline time and one cup of coffee. The math was never close.

What this session unlocks is the next piece of the daily-practice loop — the in-dashboard voice capture I had to park last week — because now the environment it runs in cannot lie to me about whether it is up.
