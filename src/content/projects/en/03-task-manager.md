---
title: Task manager rebuild
description: Full rebuild of an internal task manager — new architecture, new UI, new navigation.
slug: task-manager
order: 3
status: in-progress
---

## The problem

The existing version of the task management system had problems affecting both user experience and code maintainability. The interfaces were slow — pages showing the same information made individual queries for each view instead of a single global query. Navigation was poorly structured and the experience did not hold up against comparable tools on the market. Feedback from potential clients and internal users confirmed what the code already showed: it needed to be rebuilt, not patched.

## What I'm building

After a diagnostic process with the design team — which included feedback sessions, internal usage and comparative analysis with similar applications — the decision was made to do a full redesign: new interface, new navigation and new architecture.

On the technical side I experimented with multiple approaches before making a decision. I evaluated architectures from the simplest to Atomic Design and Clean Architecture. The result was a custom architecture — a blend of Screaming Architecture and Vertical Slices — centered on features as the main unit of organization. Each feature is autonomous, coherent and easy to locate. SOLID, DRY and YAGNI principles guide every implementation decision.

This same architecture became the company's internal standard for React projects — I designed and maintain it, and today it's adopted by the entire frontend team.

## Current state

In active development. Estimated launch: 2 months. The build process — including architecture decisions, discarded experiments and lessons learned — will be documented as technical content on the blog.
