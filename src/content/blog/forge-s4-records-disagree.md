---
title: "When Two Records Disagree, You Don't Have a Record"
date: "2026-04-19"
category: "forge"
tags: [forge, building-in-public, pipeline, strategy]
excerpt: "A vision document said one thing. Three sessions of code shipped another. Nobody on the inside noticed for ten days."
---

Today's plan was one task: a backend endpoint so the journal vault could finally be read from outside the writer. Routine, on paper. Everything had been through the pipeline (risk scan, prompt design, prompt audit, all clean) and the prompt was sitting in a buffer waiting to be pasted into a fresh code-writing session.

Before pasting, I ran the prompt through a separate AI as a red-team check. This is a habit from prior sessions: another set of eyes on the spec before any code lands. The other AI read the prompt against my project's vision document and refused to proceed. It said the document defined an active milestone that the prompt did not seem to be advancing, and it asked me to resolve the contradiction before continuing.

It was right. The vision document had been written ten days ago, when I expected to build a publishing pipeline first. Then priorities shifted. The pipeline I actually built was the voice-journal loop. Three sessions of code went into something the strategy doc didn't describe, and nobody on the inside noticed. Not me, not the AI assisting me, not the build pipeline itself. We were all operating from a shared mental model that had silently overwritten the document. The doc was fiction. The code was the de facto strategy. But unwritten strategy can't be debated, can't be challenged, can't be inherited by a future-me who has forgotten what the present-me decided.

I paused mid-session, formally cancelled the old milestone, snapshotted it to a log so the audit trail stays intact, and opened a new milestone with five binary criteria. Three were already met by prior sessions. Today's task was the fourth. The dashboard next session is the fifth. After the rewrite, the document and the code agreed for the first time in over a week.

The endpoint then shipped clean. Code review found nothing. Hands-on smoke against a real running server confirmed the privacy boundary held: the source markdown had a section that was deliberately excluded from the response, and the response excluded it. Then the deploy step surfaced a different surprise. I tried to push the commit straight to the main branch and the repository refused. Branch protection required a pull request. The protection caught the right thing (pushing direct to main bypasses any review) and the workflow I'd been using by default was the wrong default. New pattern: code commits go via feature branch and pull request. Pipeline audit-trail commits go to main directly. Two surfaces, two policies, codified before the next session can drift away from it.

## When Two Records Disagree, You Don't Have a Record. You Have a Guess.

The strategy document drift is the lesson, not the endpoint. Internal alignment is the fastest-moving lie in any system. "We all know what we're building" overwrites the document within weeks because nobody rereads it. The document becomes wallpaper. The code becomes the de facto strategy. But code is not strategy. Code is what was executed. Strategy is what should be executed and why. When they diverge, the divergence is invisible to insiders and obvious to outsiders, which is exactly why an outsider had to catch it for me.

The analogy I keep coming back to is railway train-order readback. A dispatcher issues a movement authority over the radio. The engineer reads the order back word-for-word. The dispatcher confirms or corrects. The order is not valid until the readback completes. A signal sent without a readback isn't a signal. It is a hope. The readback is the safety mechanism, not the order itself.

Most teams have orders without readbacks. Strategy docs that get written once and never reread. PRDs that land in a wiki and rot. Vision documents that sound right at the all-hands and have nothing to do with what shipped that quarter. Kodak invented the digital camera in 1975 and put it in a vault. They never read the data back into strategy because the readback would have shown that film was a dying business, and that conclusion was politically inconvenient. By the time someone actually read it back, the industry had moved on. The data wasn't worthless. The refusal to read it back was.

The fix is mechanical. Pick one canonical source of truth. Add a forcing function that fails loudly when the doc and the reality disagree. In my case the forcing function is going to be a mandatory external-AI check before any new feature ships, codified into the pipeline as a step that can't be skipped. It has caught two real findings in two of the last four sessions. The case is empirical now, not theoretical. A document that disagrees with the system it claims to describe isn't context. It's noise dressed up as authority.

The endpoint that shipped is, structurally, the first time the journal vault is readable from outside the writer. Until today the vault was a one-way mirror: content went in, nothing came out through any clean surface. Now there is a window. The dashboard built next session turns occasional review into daily readback. Without that path, the data we collect is data we never reckon with. Same lesson, different layer. The strategy doc needed a readback. The vault needed a readback. And I needed to admit that the read side of any system is what makes the write side honest.

Next up: the dashboard page that calls this endpoint, and the codification of the external-AI prompt-check into the pipeline itself, so the next drift is caught by my own machinery instead of caught by luck.
