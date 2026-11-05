---
title: Auction system
description: Multi-audience system unifying admin panel and participant portal in a single platform.
slug: auction-system
order: 2
status: done
---

### The problem

A company needed to digitize its asset auction process — vehicles, real estate and general goods — on a single platform that could serve completely different audiences: the administrative team managing the assets and the external participants bidding in the auctions.

### What I built

I developed the frontend of a multi-audience system that unifies the public landing, the administrative panel and the participant portal under a single codebase. Two technical decisions defined the project:

*Audience management* — Instead of building separate applications, I implemented a session system with user typing and validators that determines which portal to render based on role. Simple on the inside, invisible to the user.

*High-complexity UI with shared state* — The main auction view was the most demanding challenge: a two-column layout where the left column shows an asset table with a footer control to switch between active auctions — replacing the entire table content — and the right column shows the detail of the selected asset. That detail is fully dynamic: its structure changes depending on whether the asset is a vehicle, a property or a general item. I designed the component architecture so that shared state between columns was predictable and changing asset type would not cause visual or data inconsistencies.

### The result

A system that unifies two audiences with opposing needs in a single platform, with an administrative interface capable of handling multiple asset types and simultaneous auctions without losing visual or functional coherence.
