---
title: "One token, one use, no boats"
date: "2026-05-21"
category: "forge"
tags: [forge, security, structural-defense, building-in-public]
excerpt: "Multi-use tokens defended by policy can be replayed. One-shot tokens defended by structural commit at consume-moment cannot. Cortés knew this in 1519."
---

The phone-side password reset shipped this session. Seven files, multiple audit rounds, two revisions plus an inline patch. The principle inside those seven files is the one I want to write down.

A reset token issued by the server traverses Resend's outbound queue, the user's mail provider, the mail app, the OS deep-link router, React Navigation's serialized route state, the phone's screen-reader buffer, possibly the clipboard if a user long-presses, possibly a crash log if any analytics SDK is installed. Every one of those surfaces is outside the system that issued the token. You cannot keep the secret a secret. That ship sailed when you sent the email.

The defense isn't secrecy. The defense is making the token useless past the first use.

## Hernán Cortés, Veracruz, July 1519

![Hernán Cortés ordena dar al través sus navíos — Rafael de Monleón y Torres, 1887. Public domain via Wikimedia Commons.](https://upload.wikimedia.org/wikipedia/commons/f/f8/Hern%C3%A1n_Cort%C3%A9s_ordena_dar_al_trav%C3%A9s_sus_nav%C3%ADos._Rafael_de_Monle%C3%B3n_y_Torres%2C_1887.jpg)

Cortés landed on the Mexican coast in July 1519 with around five hundred men. The dominant military doctrine of the era was "preserve the option to retreat." He did the opposite. Once essential supplies and the small artillery were ashore, he ordered the ships scuttled. The popular telling says he burned them; the literal record says he ran them aground. Same effect. His crew now had two states. Forward to Tenochtitlan. Dead on the beach.

The reason the move worked at scale wasn't courage. It was the removal of state. There was no Plan B token anyone could fall back to. The Spanish soldiers had been arguing about retreat; the destruction of the retreat option ended the argument. The boundary "we commit to the campaign" became enforceable not at the moment of vote, but at the moment the ships sank. Forward was the only direction reachable because backward had been structurally removed.

That is the pattern.

## What shipped

T28-1 is the phone half of the password reset arc. The token discipline runs at four layers, each one structural at the moment of use.

The backend RPC `consume_reset_token_and_update_password` from the previous session consumes the token in the same Postgres transaction that updates the password hash. There is no "valid token still sitting in the DB after one use." It is gone before the response returns.

The phone side captures the token from `route.params` into local component state via a `useEffect`, gated by a `useRef` flag that flips true on first run. Re-renders cannot re-capture. The same effect calls `navigation.setParams({ token: undefined })` to scrub the token out of React Navigation's serialized state tree. Then, on a successful password update, `navigation.reset({ index: 0, routes: [{ name: 'Main' }] })` replaces the stack history entirely. Back-gesture has no destination. The Android hardware back button is intercepted by a `BackHandler` that also routes through `reset`. Cancel works the same way. The retreat path is closed in four independent ways.

Each layer's defense is the structural commit of the previous layer's credential. Layered (Maginot, S27's lesson) times structural (each layer invalidates rather than monitors) equals a two-dimensional defense matrix. The previous session got the parallel-layer half. This session got the structural-at-each-layer half. The product of the two is the alpha-1 token discipline.

## The joke I'm legally obligated to make

Cortés did not have SHA-256 in 1519. He had a hatchet, eleven ships, and a working thesis about retreat options. That was enough. If you are building authentication in 2026 with multi-use tokens defended by "policy and monitoring," you are running the Maginot strategy without the consolation prize of a hundred-fifty-kilometer concrete bunker. The Wehrmacht here is one stack trace away.

## What this unlocks

The next session is not another forge cycle. The next session is wiring the phone app to production Railway, because twenty-eight sessions of building something I cannot open in my pocket is the audit-ceremony-exceeds-fix-surface failure mode I codified back at session fifteen. The dogfood loop closes next. The token discipline already shipped. The boats are already scuttled. Forward is the only direction left.
