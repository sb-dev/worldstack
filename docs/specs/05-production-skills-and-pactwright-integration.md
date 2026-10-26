# Production Skills and Pactwright Integration

## Purpose

Define how Worldstack consumes specialist Production Skills without making either Worldstack or Pactwright absorb their domain workflows.

## Composition boundary

```text
Pactwright
→ selected Agent Pack
→ one or more Production Skills
→ domain production
```

Production Skills remain independently installable and own their workflows, artefacts, commands, provider/tool interaction and domain evaluation.

Pactwright owns Contract fulfilment, lifecycle authority and Evidence. Project Intelligence owns Worldstack-specific durable conclusions.

## External dependency boundary

Worldstack must pin the exact usable Pactwright Core, Project Intelligence extension and Production Skills revisions selected for a Delivery. Their schemas must not be guessed or recreated locally when an external implementation is unavailable.

Pactwright Core and Project Intelligence are separate availability gates. A usable Core revision does not imply that the compatible Project Intelligence extension is available.

The Production Skills capability baseline may inspect the actual skill repositories directly. A central Production Skills catalogue or incubator is not a prerequisite for Roadmap 01.

## Required skill families

Worldstack's target family includes game development, software engineering, deep research, UI/UX, world/environment production, 3D, character, animation, narrative, video/cinematography, music, sound and QA/evaluation.

The first roadmap prioritises deep research, software engineering, game development and QA/evaluation, followed by world/environment production, UI/UX and 3D.

## Capability-gap loop

```text
Worldstack Delivery
→ production difficulty
→ capability gap
→ production-skills incubator
→ research / PoC / benchmark
→ repeated evidence
→ Extension Pack OR new Production Skills project
```

One project-specific problem is insufficient evidence for a new reusable skill family.

## Reusable versus project-specific knowledge

Reusable production technique belongs in Production Skills. Worldstack-specific lessons belong in Project Intelligence.
