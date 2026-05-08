---
title: "Foundation Day"
date: "2026-05-07"
category: "forge"
tags: [forge, building-in-public, infrastructure, milestone]
excerpt: "Cloud foundation shipped tonight. The full breakdown comes tomorrow with a clearer head."
---

Tonight Workhorse stopped being a thing on my laptop and became a thing on the internet.

The cloud foundation went live. A database in a Canadian data centre, an API server that boots, a dashboard host that renders, three custom domains pointed at the right machines. It took six hours, four commits, three platforms, one product pivot mid-deploy, and a defensive coding pattern that fired exactly as designed when production tried to start without the keys it needed.

The moment that earned the day was small. I curled the new API URL from my laptop and watched a JSON object come back from a Canadian database, through HTTPS, through an Express server that didn't exist this morning. Two hundred OK. Reachable. The privacy moat I've been talking about for weeks — data lives in Canada, the master key never touches the browser, the foundation is mine — became literally true around 8 PM.

There's a real story in tonight's session. The deploy taught me something about the gap between "tested locally" and "running in production" that's worth a full post on its own. The product itself sharpened in a way that only happens when you're staring at a DNS form at hour four and someone asks you what you're actually building. Both of those deserve the proper press treatment, not a tired-brained recap at midnight.

So this is the placeholder. The work shipped. The system runs. Tomorrow I sit down with a coffee and write the real post — the lesson, the principle, the moment the deploy crashed loud and exactly correctly. That post lands here in this slot. Watch this space.

For tonight: foundation in. Rocket later.
