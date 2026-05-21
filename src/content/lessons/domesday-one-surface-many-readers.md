---
title: "One Surface, Many Readers"
date: "2026-05-02"
session: "S12-2026-05-02"
task: "T12-1"
pillar: "P6 Systems Thinking × P29 Behavioral Architecture"
analogy_domain: "HISTORY-DOMESDAY-1086"
excerpt: "When a request arrives that looks like one artifact, ask whether it is three. Three documents fused into a single surface beats three drifting documents written in parallel."
tags: [forge-finding, surface-design, domesday, convergent-reading, mercator]
---

## The lesson

When a request arrives that looks like one artifact, ask whether it is three. If it is three and they share readers, ship one surface — three documents fused into a single artifact. The artifact-shaped request hides the surface-shaped intent.

Divergent reading is not creativity; it's the discipline of pausing before the first line is written to ask whether the obvious answer is one face of a three-faced thing that wants to ship together. Convergent reading wins by default because the future cost of three drifting documents is invisible at decision time.

## Analogy — CARTOGRAPHY: Mercator's Projection (1569)

Gerardus Mercator's 1569 world map is one surface that simultaneously serves three reader types. Navigators read it for rhumb lines — the projection's defining property is that any straight line drawn between two points represents a constant compass bearing, which made transoceanic navigation tractable. Surveyors read it for angle-preservation — local shapes are correct even if global areas are distorted. Pedagogy reads it as the canonical world map, the one schoolchildren have seen for four centuries.

Three jobs, one surface. Mercator did not commission three projections for three audiences — he designed one projection whose mathematical properties happened to satisfy multiple reader needs at once. The same physical map was re-read by every generation that found a new use for its properties. The divergent move was not in the artifact but in the design constraint: "make a projection that preserves angles globally" is broader than "make a projection useful for sailors," and the broader constraint produced an artifact that outlived its original purpose by hundreds of years.

## How it landed in T12-1

The Domesday Book (1086) is the canonical example of one survey serving readers the surveyor never imagined. William the Conqueror commissioned the survey in late 1085 as a tax instrument — he needed to know what England was worth in order to assess geld (the land tax). The commissioners visited every shire, every hundred, every vill, every manor, and recorded for each: the holder before the Conquest (1066), the holder at the time of the survey (1086), the assessment in hides, the values pre-Conquest and current, the number of plough-teams, the population by class, the number of mills, the swine pannage, the woodland and meadow, the fisheries.

The level of detail was unprecedented and unnecessary for the tax calculation. William's insistence on capturing everything about every estate turned the survey into the legal property registry that English courts cited for centuries, the demographic census of medieval England (the only population estimate that survives for roughly 1.5–2 million in 1086), and the foundational primary source for medieval economic history. One artifact, four readers across nine hundred years, one surface. The divergent move at design time was William's specification of breadth over narrow purpose.

T12-1's session got a request that looked like two simple jobs: make the calendar scrollable, and add a resume page. The fast answer would have been a `<div style="overflow-x: scroll">` and a static `/resume` HTML file. The actual answer recognized that the calendar wanted to be the program's tracker (the whole twenty-four months, scrollable in one timeline) not just the month's tracker, and the resume wanted to be three documents sharing one surface (a resume answering "what have you shipped," a cover letter answering "what would you do for me," and a model-authored inferences section answering "what does the work suggest about the builder").

The moment you ask "is this one document or three?" before writing the first line, the answer changes how the surface is structured. Build for one document, you ship one document and rebuild later when you discover you needed three. Build for three readers from the start, you ship one surface that serves all three and stays consistent because it's computed from the same data.

## The wider pattern

Connects to S10 The Audit Chain Pays Off Three Times Then Stops (sizing the audit to the artifact rather than maxing out by default) — both lessons name the same shape of question: what is the actual job here, not the apparent job. Connects to S11 Wired-vs-Unwired Safety (the timeout signaled intent without observing the underlying operation) — both lessons concern the gap between the artifact's stated purpose and what it actually does for its consumers.

Connects to S6 Measure the Thing, Not Its Shadow — the calendar that only renders the current month measures the shadow (where are we now) when the audit demands the thing (where have we been). Every place there's a single artifact, ask whether two or three readers want it.

## Sources

- [UK National Archives — Domesday Book reference](https://www.nationalarchives.gov.uk/domesday/)
- [Open Domesday — Anna Powell-Smith, searchable Domesday data with all 13,418 places](https://opendomesday.org/)
- [Mercator projection — Wikipedia: mathematics + history](https://en.wikipedia.org/wiki/Mercator_projection)
