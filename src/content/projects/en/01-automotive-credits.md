---
title: Automotive credit management system
description: Comprehensive automotive credit management platform with multi-actor workflows and digital signing.
slug: automotive-credits
order: 1
status: done
---

### The problem

An automotive company managed its credit lines for dealerships manually and in a fragmented way. The process involved multiple actors — operators, legal representatives, advisors, administrators and validators — with no centralized system to control states, validate business rules, or guarantee traceability throughout the complete process.

### What I built

I developed the frontend of a comprehensive credit management system that unifies the entire workflow — from the initial requisition to the digital signing of the contract. Four technical decisions defined the project:

*State and actor control* — I designed a permissions and state system that determines what each actor can see and do at every step of the process. A dealership operator never sees what an internal validator sees, and vice versa. The workflow does not advance if states are not correctly resolved.

*Differentiated business rules* — The validation, approval and requisition-generation logic differs for new-unit credits, pre-owned units and refinancing. Each type has its own set of rules implemented so the system applies them automatically based on context.

*Digital signing with an external service* — Signing happens on the external provider's portal. On our side I implemented document generation and regeneration, submission to the service, receipt of signed documents via webhooks, and automatic assignment to the corresponding credit.

*CRM integration* — The system is connected at all times to the company's CRM, synchronizing information about dealerships, credit lines and requisition states.

### The result

A process that was previously manual, error-prone and untraceable became an end-to-end controlled digital workflow — with automatic validations, state auditing and integrated legal signing.
