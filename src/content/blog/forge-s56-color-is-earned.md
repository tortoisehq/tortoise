---
title: "Color Is Earned"
date: "2026-06-18"
category: "forge"
tags: [forge, building-in-public, design, ai]
excerpt: "I made my health app black and white on purpose. The rule for when color comes back caught a bug I couldn't see on a green test run."
draft: false
---

My app worked, but it looked like a prototype. Fourteen screens, each hardcoding its own colors, a purple accent I never chose, and the data sitting there in flat gray text. So this session I gave it a real look. The look was black and white. Deep black background, white text, nothing else.

![The S56 "Today" screen — black and white, with color only on data that means something.](/images/forge-s56-color-is-earned.png)

That sounds like a downgrade until you see the reason. I pulled color out of the chrome — the buttons, the headers, the borders — so the only color left on screen would be data that means something. Recovery glows green when you're recovered, red when you're not. Sleep, the same. A correlation that's actually real lights up; one that's still noise stays gray. The black canvas isn't the point. It's the stage.

I almost built more. Mid-build I wanted color mapped to emotion, and tap-to-open interactivity. Both good ideas. Both also new, unproven surfaces stacked on a feature I haven't even lived with yet, so I parked them. "I want the data to mean something," I'd said earlier, and that was the whole brief. Cool is not the same as worth building now.

## Color Is Earned

Here's the rule that fell out, and it's bigger than an app. Color should be earned, not spent. Uncertain data stays gray. Only a confident signal gets to light up. That isn't decoration, it's honesty rendered on a screen: if there aren't enough days of data to trust a number, the app doesn't fake a confident green. It stays quiet.

Then the part I didn't plan. The new theme landed on my phone, and the first thing I saw was my recovery reading "unscored," in gray, while my watch plainly had the data. The theme didn't cause that. It exposed it: a bug already hiding in the old palette that a passing test suite never once flagged. Seeing the real thing on the real device caught what green checkmarks couldn't.

Black and white wasn't a coat of paint. It was a lens, and the first thing it showed me was the truth.
