---
title: "Each Fix Is Permission To See The Next Bug"
date: "2026-05-03"
category: "forge"
tags: [forge, building-in-public, debugging, verification]
excerpt: "What I thought was a fix turned out to be permission to see the next bug. The recorder worked; the upload behind it didn't."
---

The voice journal had been broken since I shipped it. Every record-stop cycle ended in "Recording failed before any audio was captured." I'd been blaming the mic, the browser, my own setup. Today an outside check told me the truth: a 3-second timer in the recorder was wired to fire from `start()` instead of `stop()`. With no per-chunk streaming, audio data only arrives at stop. So the timer fired during every normal recording, looked at empty chunks, and rejected.

The fix was small. Twenty-five lines across two files. Same 3-second window, different trigger event. Build went green. Internal review approved. A clean session re-ran the test, and the recorder fix held: the state machine reached `uploading` for the first time in this codebase's life. Then the upload itself hung. Three minutes, then four. Different recordings, different lengths, same dead end. The proxy timed out. The api never logged the request. A direct curl to the same endpoint with a real WAV file worked in six seconds.

A different bug, hiding behind the one I just fixed.

## Each Fix Is Permission To See The Next Bug

This is the iceberg pattern of any system that has been broken upstream. If layer one fails before layer two runs, layer two's bugs are invisible. Fixing layer one is the only way to *see* layer two, but that is not the same as fixing layer two. The "shipped" claim I attached to the recorder fix should not have been attached to "the feature works." The feature works only when *every* layer works, which requires every layer to actually run, end-to-end, at least once.

The historical anchor I read while the audit was running was [Three Mile Island, 1979](https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/3mile-isle.html). A reactor's pilot-operated relief valve stuck open for over two hours. The control room indicator light showed "closed" the whole time, because the light was wired to the *command sent* to the valve, not to the valve's actual mechanical position. Operators trusted the proxy. Coolant boiled off. Partial core meltdown, billion-dollar cleanup. The post-accident NRC mandate moved position-indicating signals from command-derived to mechanically-sensed via independent sensors. The wiring was the fix; tuning the threshold or training the operators was not the fix.

Same shape on a tiny scale today: a guard wired to a proxy of the thing it defends against. My recorder timer measured "no audio yet" rooted at the wrong lifecycle event. The fix moved the wire, kept the value. Within an hour the run found another instance of the same family on the upload path. Different wire, same diagnostic stance. After four months of building this system on the side of a rail schedule, the lesson keeps reappearing.

What changed today wasn't only the code. It was who runs the verifier. The clean session that caught the recorder bug, then re-caught the upload bug after the recorder fix, was an external operator with no history in this codebase. It read no source code, had no memory of prior debugging, no expectation of what the bug would be. A different operator running with that constraint produced sharper evidence than I would have produced reading my own implementation. The verifier role is now pluggable, a separate component of the build pipeline rather than a thing I do alongside everything else.

[Double-blind clinical trials](https://en.wikipedia.org/wiki/Blinded_experiment) work the same way. Patient blindness removes expectation effects; doctor blindness removes confirmation bias; analyst blindness removes interpretation bias. Each layer of separation removes a class of error. An independent third-party building inspector walks a structure with the building code and the architectural drawings, but not the contractor's notes about what they improvised when the steel was late. The inspector misses things the contractor catches instantly. They also catch things the contractor's frame contains as blind spots.

The most honest thing I shipped today wasn't the code fix. It was the protocol: paste a sealed verification prompt into a fresh instance, do not let it read the implementation, accept whatever it observes as the authoritative ground truth. "Ship and verify" became "ship and ask a stranger to verify." The friction is real. The runs take longer. The report comes back slower. You can't shortcut to "let me check the upload construction myself." That friction is the discipline.

By the time the run finished I had a P0 with an exact diagnostic, a hypothesis worth checking, and a session that had earned its close. So I closed it. The call I made out loud was "we can close the session - write the blog and ship it automaticly." Three actions in one breath: defer the fix, end the day cleanly, publish what was learned. When a verification surfaces a new P0 on a layered defect, the right move is closing well, not staying in to grind. Closing is a discipline.

The next session opens with the upload bug. I already know the rough shape: missing filename in the multipart upload from browser-recorded audio, hanging the api's body parser indefinitely. One bounded source-read after the P0 will tell me if the hypothesis is right. The verifier I send in afterward will be a stranger again. That part of the protocol is set.
