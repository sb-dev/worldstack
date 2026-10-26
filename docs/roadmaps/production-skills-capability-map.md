# Production Skills capability map

This is Worldstack's source-inspection baseline for [INT-003](../../specs/graph/intents/int-003-production-skills-capability-baseline.md), dated 26 October 2026. It records candidate sources, not installed dependencies or accepted integration evidence.

[Worldstack specification 05](../specs/05-production-skills-and-pactwright-integration.md) owns integration. The [family consumer-project contract](https://github.com/sb-dev/production-skills/blob/ae4c0f1bd63107f9dc33e192bbf2a02a9cab75cf/docs/specs/04-cross-domain-orchestration-and-integration.md#14-consumer-project-boundary) places selection, capability maps, integration experiments and project knowledge here. Historical central programme proposals do not override that boundary.

## Classification

Use INT-003's vocabulary: `available` requires evidence for the needed installed workflow; `partial` means relevant surfaces exist but proof or coverage is incomplete; `incubating` means bootstrap work exists without an installed workflow; `missing` means no usable source was found in this inspection; `not-yet-required` defers selection until a concrete outcome needs it. These are Worldstack coverage assessments, not changes to family registry maturity.

The inspected repository trees and documents support the assessments below. No skill installation, domain benchmark or Worldstack integration was executed. Source links pin the inspected revisions; they are not dependency locks.

## Roadmap 01 coverage

| Capability and use | Inspected source | Assessment and unresolved gate |
|---|---|---|
| Deep Research: evidence and assumptions for INT-005, technology comparison for INT-008/009 and Storm Run research | [Deep Research](https://github.com/sb-dev/deep-research-skills/blob/80b209968b366662c01a8ded5ecb6c30bb6beb0b/README.md) | **Incubating.** Tree contains README and bootstrap research only. Needs an installed workflow producing traceable findings and limitations for a Worldstack question. |
| Software Engineering: contracts, replay, runtime boundaries and performance across INT-004–013 | [Software Engineering](https://github.com/sb-dev/software-engineering-skills/blob/684986785ceafbc031419d6fc7287dbfe0578dba/README.md) | **Incubating.** Bootstrap documents only. Needs an installed implementation/repair workflow with product tests and preservation evidence. |
| Game Development: physics, test games and composition across INT-009–013 | [Game Development](https://github.com/sb-dev/game-development-skills/blob/a4b1c2bf2d5188ecf8837da3447eb0d1184e93fe/README.md) | **Incubating.** Bootstrap documents only. Needs a bounded game workflow whose output meets Worldstack acceptance. |
| QA/Evaluation: replay, integration and regression across INT-006–013 | [Registry entry](https://github.com/sb-dev/production-skills/blob/ae4c0f1bd63107f9dc33e192bbf2a02a9cab75cf/registry/projects/qa-evaluation-skills.json) | **Missing from this inspection.** GitHub returned 404 for repository metadata and its main tree. This does not establish whether it is absent or inaccessible. Resolve an inspectable source and prove a meaningful regression before selection. |
| World/environment: spatial contracts, city breadth and state representation for INT-012/013 | [World/environment](https://github.com/sb-dev/world-environment-production-skills/blob/6ffb074ac85802aabe9ac6794005aee0fa3558f0/README.md) | **Incubating.** Bootstrap documents only. Needs source-to-spatial-output traceability, runtime handoff and targeted repair evidence. |
| UI/UX: observable interactions and acceptance criteria for interactive experiments | [UI/UX scaffold](https://github.com/sb-dev/ui-ux-design-skills/blob/db888866787542311e9e29e15ed92362f5f283e5/SCAFFOLD.md); [acceptance command](https://github.com/sb-dev/ui-ux-design-skills/blob/db888866787542311e9e29e15ed92362f5f283e5/skills/uiux-handoff/commands/define-acceptance-criteria.md) | **Partial.** Skill and command files exist. The scaffold reports clean external installation, semantic benchmarks and browser integration as deferred. Verify installation and one Worldstack interaction/handoff before selection. |
| 3D: modular/runtime assets when primitive representation no longer answers the experiment | [3D Production](https://github.com/sb-dev/3d-production-skills/blob/b44cd30d91e714cca013b71f38feed5bb40bf3f9/README.md) | **Incubating; conditional use.** Bootstrap documents only. No production asset dependency is introduced for Roadmap 01. Prove scale, interchange and assembly when asset craft becomes necessary. |
| Legal: map/reference provenance and permitted use before affected ingestion or publication | [Legal](https://github.com/sb-dev/legal-skills/blob/b15f3134552ea763d434783d655aea44c0e01925/README.md) | **Incubating.** Bootstrap documents only. Resolve applicable source restrictions through evidenced review before use; repository existence is not legal clearance. |

These gaps do not authorise local copies of external skill or Pactwright schemas. Each affected Delivery must resolve the capability it actually needs and record its chosen execution approach. Do not make every future family a blanket prerequisite for all Roadmap 01 work.

## Planned stress-test connections

The owning bootstrap documents define these programmes. Placement below is Worldstack's proposed sequencing, not evidence that a stress test has run.

| Programme and source | Worldstack connection | Required integration evidence |
|---|---|---|
| [World/environment stress test](https://github.com/sb-dev/world-environment-production-skills/blob/6ffb074ac85802aabe9ac6794005aee0fa3558f0/docs/research-logs/2026-09-08-world-environment-production-skills-new-project-bootstrap-process.md#stress-test-a--worldstack-real-world-systems-representation) | Begin with City Flyover's source/spatial boundaries; extend into later world slices. | Source provenance and spatial alignment survive handoff; representation follows state; regeneration preserves approved local edits. |
| [3D stress test](https://github.com/sb-dev/3d-production-skills/blob/b44cd30d91e714cca013b71f38feed5bb40bf3f9/docs/research-logs/2026-09-08-3d-production-skills-new-project-bootstrap-process.md#stress-test-a--worldstack-modular-urban-asset-family) | Add when reusable modular assets are required. | Dimensions, axes, pivots and assembly remain correct through export and runtime use; source restrictions remain traceable. |
| [Character Performance stress test](https://github.com/sb-dev/character-performance-skills/blob/bc690f5716f02e2b62ff1a4c9cdcbd9ae96cfbf6/docs/research-logs/2026-09-08-character-performance-skills-new-project-bootstrap-process.md#stress-test-a--worldstack-population--hero-npc-performance) | Later populated slices; production character work is not required for the first police model. | Identity and state-driven performance survive fidelity changes; animation cost is measured; repair preserves approved work. |
| [Audio stress test](https://github.com/sb-dev/audio-production-skills/blob/394280e6c8f3168f8cb019644f0b6163b0035a6d/docs/research-logs/2026-09-08-audio-production-skills-new-project-bootstrap-process.md#stress-test-b--worldstack-city-audio-system) | Later state-representation slices. | Weather/vehicle/population state drives sound without invented state; spatial transitions, runtime costs and provenance are evaluated. |
| [Legal stress test](https://github.com/sb-dev/legal-skills/blob/b15f3134552ea763d434783d655aea44c0e01925/docs/research-logs/2026-09-08-legal-skills-new-project-bootstrap-process.md#worldstack) | Before relevant source ingestion, derived-asset distribution or public representation. | Decisions cover the actual sources, intended use and distribution context; restrictions survive cross-domain handoffs and are reviewed when those inputs change. |

Character Performance and Audio are **not-yet-required** for Roadmap 01's minimal games. Their inspected trees contain bootstrap documents only. Audio's [README](https://github.com/sb-dev/audio-production-skills/blob/394280e6c8f3168f8cb019644f0b6163b0035a6d/README.md) reports that Music remains the canonical music implementation until migration/parity gates pass; this map does not replace Music with an unverified Audio implementation.

Narrative, music and video/cinematography remain target capabilities under specification 05. Their selection is **not-yet-required** for Roadmap 01 and their implementation was not assessed here. Add exact source and installation evidence when a concrete representation outcome needs them.

## Selection and evidence

Before a capability participates in Delivery, refresh its source assessment and record the exact skill revision, selected Extension Packs if any, installation result, owned task and integration fixture. Keep source-inspection findings separate from observed execution results. Only promote coverage when the relevant proof exists.

Retain three evidence layers:

- **Specialist benchmark:** domain quality, owned by the skill repository.
- **Pactwright evaluation:** responsibility and integration fulfilment.
- **Worldstack acceptance:** model, experiment and assembled-product behaviour.

A skill benchmark cannot substitute for Worldstack's replay or integration tests. Worldstack-specific findings remain project knowledge. Propose reusable gaps upstream only after the evidence supports generalisation.

This baseline does not close INT-003 or prove usable Pactwright Core/Project Intelligence revisions. Once canonical graph records exist, derive coverage and progress views from accepted evidence under the [roadmap authority rule](README.md).
