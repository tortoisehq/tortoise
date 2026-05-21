---
title: "Right-Size the Security Primitive"
date: "2026-05-14"
session: "S22-2026-05-14"
task: "T22-1"
pillar: "P15 Execution & Shipping Discipline"
analogy_domain: "FINTECH-STRIPE-2010"
excerpt: "Single shared secret for solo phase; structural per-user auth when users multiply. The right architecture is a function of resident count plus threat surface, not 'more security is always better.'"
tags: [forge-finding, security, stripe, right-sizing, api-keys]
---

## The lesson

Right-size the security primitive to the threat model AND the user count. Single shared secret for solo phase; structural per-user auth when users multiply.

Premature multi-user auth = months of yak-shaving; under-secured production = real leak. The right architecture is a function of the resident count plus the threat surface, not an absolute "more security is always better."

## Analogy — CONSTRUCTION: Keys vs RFID

A single-family home gets one set of keys shared across family members; a 200-unit apartment building gets individualized keys + RFID + property management software + visitor logs.

Building Bob's family home with apartment-grade access control is theatrical overkill that delays the housewarming by years; running an apartment with a single shared key is reckless that surfaces in the first robbery. The right access architecture is a function of the resident count plus the threat surface. Match the structure to the moment.

## How it landed in T22-1

Stripe's API key model. When Stripe launched in 2010, they shipped with `sk_test_` and `sk_live_` — single per-account shared secrets, no scopes, no rotation, no audit. That decision is what let Stripe win the time-to-first-charge race against established processors who wanted enterprise auth on day 1. As Stripe grew, they layered:

- **2010:** single shared keys per account
- **2012:** OAuth for Connect platforms (multi-tenant auth tier)
- **2014:** restricted keys (`rk_*`) with scopes
- **Later:** SAML SSO for enterprise

Each layer landed when the user/scope count demanded it. Not before. The order matters: ship fast at solo+small-team scale, layer security as the user count grows.

T22-1 put a password on the Workhorse API that reads the operator's journal so random people on the internet can't read it. Using the simplest possible password: one secret the operator and their future-self share. When a second person is added to use this system, the upgrade path is something where each person has their own login. Today the family-home version. Apartment-grade comes when there's actually an apartment.

## The wider pattern

Extends S15-T15-1 (right-sizing the audit pipeline — same shape, different domain — operator overrode FULL HIGH classification mid-session when the actual fix was 5 lines of vite-config) and the CLAUDE.md universal pattern "Right-size to the moment" — applies to security, audit machinery, and any structural decision.

The right-sizing instinct that saved 16 hours at S15 and ~2hr at T22-1 is itself a metaskill — to be practiced across more surfaces. Specific candidates for evaluation: the entire forge pipeline ceremony (apartment-grade for a solo project?), the triple-LLM audit machinery (overkill for non-vault changes?), the kill-switch architecture (under-engineered for the eventual alpha-user-N case?).

## Sources

- [Stripe API Keys documentation](https://stripe.com/docs/keys) — current key architecture
- [Stripe Blog — Connect launch (2012)](https://stripe.com/blog/connect)
- [Stripe Blog — Restricted Keys (2014)](https://stripe.com/blog/restricted-keys)
