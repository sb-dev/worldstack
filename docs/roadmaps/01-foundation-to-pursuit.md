# Roadmap 01 - Foundation to Pursuit

## Objective

Establish the engineering and experimental substrate required before Worldstack can test its broader multidisciplinary thesis.

```text
browser runtime + model contracts + provenance + reproducible experiments
→ physical-system test games
→ first integration game
```

Roadmap 01 primarily retires browser runtime, streaming, physics and experiment-mechanics risk. It proves that research-backed physical models can be composed and replayed, but it does **not** yet prove the central Worldstack hypothesis that useful world complexity emerges from composing small evidence-grounded models across physical, cognitive, social, economic and institutional systems.

That broader thesis begins with a later cross-disciplinary roadmap.

The roadmap intentionally stops before a full city-block vertical slice.

## Waves

| Wave | Intents | Purpose |
|---|---|---|
| 0 | INT-001..003 | programme foundation and external governance gates |
| 1 | INT-004..007 | validate bootstrap model and experiment substrate |
| 2 | INT-008..011 | browser and interactive physical-system experiments |
| 3 | INT-012..013 | world breadth + first major composition |

## Evidence baseline

Inspected on 26 October 2026 against merged revision [`5ba45f8`](https://github.com/sb-dev/worldstack/commit/5ba45f8117d09f87a84bb0e42e61c6f7d4cc310a). This is a source/evidence snapshot, not accepted Pactwright Delivery history. [PR #1's CI](https://github.com/sb-dev/worldstack/actions/runs/34144647721) passed the frozen-lockfile install and verification pipeline for its head revision; that evidence covers repository checks only.

| Intents | Observed baseline and remaining evidence | Owning specifications |
|---|---|---|
| INT-001 | Workspace, lockfile and CI exist. A usable pinned Pactwright Core and its generated workspace still need verification; see the [workspace boundary](../../.pactwright/README.md). | [06 — bootstrap adoption](../specs/06-repository-and-development-process.md#adopting-pre-pactwright-bootstrap-work), [05 — external dependencies](../specs/05-production-skills-and-pactwright-integration.md#external-dependency-boundary) |
| INT-002 | Founding research exists. Compatible Project Intelligence installation and accepted knowledge are not evidenced in this repository. | [05 — knowledge ownership](../specs/05-production-skills-and-pactwright-integration.md#reusable-versus-project-specific-knowledge) |
| INT-003 | The [capability map](production-skills-capability-map.md) records inspected sources and gaps. Skill selection, installation and Worldstack integration remain unverified. | [05 — required families](../specs/05-production-skills-and-pactwright-integration.md#required-skill-families) |
| INT-004–006 | Candidate [world model](../../packages/world-model/src/index.ts), [experiment identity](../../packages/experiment-model/src/index.ts) and [seeded helper](../../packages/test-harness/src/index.ts) exist. Unrelated consumers, provenance review and replay evidence remain required. | [02 — model contracts](../specs/02-world-model-and-system-integration.md), [03 — experiments](../specs/03-experimentation-evidence-and-emergence.md) |
| INT-007–009 | Cross-system fixtures and rendering/physics comparisons remain planned. No provider is selected by this roadmap. | [02 — integration](../specs/02-world-model-and-system-integration.md#cross-system-integration), [03 — determinism](../specs/03-experimentation-evidence-and-emergence.md#determinism) |
| INT-010–013 | The [labs directory](../../apps/labs/README.md) reserves the intended games; implementations and regression evidence remain planned. | [03 — interactive experiments](../specs/03-experimentation-evidence-and-emergence.md#interactive-experiments), [04 — permanent fixtures](../specs/04-game-world-and-representation.md#development-ladder) |

The [bootstrap Intent files](../../specs/graph/README.md) own detailed acceptance targets. Before executing an experiment, its Contract/Brief must name the workload, runtime conditions, observations, pass criteria and evidence location. Define performance budgets from the selected target environment; this roadmap does not invent universal thresholds.

Keep observations and replay/regression results with the authorised Delivery evidence. Once Pactwright is initialised, derive progress from its canonical records under the [roadmap authority rule](README.md). A source inspection or passing package test does not close an Intent.

## Intent summaries

### INT-001 - Bootstrap Worldstack

Establish the minimal pnpm/Turborepo repository, TypeScript baseline, canonical specs, research log, reproducible CI and Pactwright workspace boundary.

**Dependencies:** none.

**Evidence target:** Frozen-lockfile install, check, test and build are clean; canonical bootstrap material is present; a pinned usable Pactwright Core revision can initialise and validate its canonical workspace.

### INT-002 - Bootstrap Project Intelligence

Turn founding research and architecture decisions into compact accepted project knowledge usable by later Contract crafting.

**Dependencies:** INT-001.

**External gate:** blocked until an exact Project Intelligence extension revision compatible with the selected Pactwright Core is verified as usable. Do not invent a local PI schema to bypass this dependency.

**Evidence target:** Later Briefs can consume accepted conclusions without loading the full research corpus.

### INT-003 - Production Skills Capability Baseline

Classify the Production Skills needed by Roadmap 01 as available, partial, incubating, missing or not-yet-required.

**Dependencies:** INT-001.

**Evidence target:** A capability map exists without prematurely creating new skill repositories. Source Production Skills repositories may be inspected directly; a central catalogue is not required.

### INT-004 - Minimal World Model

Create the smallest engine-neutral model vocabulary required by the first experiments.

**Dependencies:** INT-001, INT-002.

**Bootstrap status:** candidate implementation already exists in `@worldstack/world-model`. This Intent remains open and must validate or revise that implementation rather than pretending it is new authorised Delivery.

**Evidence target:** At least two unrelated Roadmap 01 consumers can use the model contract without changing its basic semantics.

### INT-005 - Model Provenance Contract

Make phenomenon, evidence, assumption-to-evidence links, limitations, fidelity and revision inspectable for executable models.

**Dependencies:** INT-004.

**Bootstrap status:** candidate provenance fields already exist and are being tightened. This Intent remains open until downstream experiments show that a reviewer can reconstruct the model rationale.

**Evidence target:** A reviewer can reconstruct why a model behaves as designed, which Evidence supports each assumption, and what the model does not claim.

### INT-006 - Reproducible Experiment Harness

Provide minimal experiment identity, parameters, model revisions, seed, runtime identity, input-trace identity and observation recording.

**Dependencies:** INT-004.

**Bootstrap status:** candidate implementation already exists in `@worldstack/experiment-model`. This Intent remains open until an interactive experiment can be replayed from pinned identity.

**Evidence target:** A small recorded-input fixture proves reconstruction and replay against pinned identity without depending on Storm Run or a browser host. See [INT-006](../../specs/graph/intents/int-006-reproducible-experiment-harness.md#evidence-target).

### INT-007 - Cross-System Event PoC

Test the smallest event/state exchange allowing two models to interact while remaining independently testable.

**Dependencies:** INT-005, INT-006.

**Evidence target:** A rainfall→road-state interaction works without either model importing the other's internal implementation.

### INT-008 - Rendering Host Evaluation

Compare browser rendering hosts with equivalent world data and workload, selecting an initial host without coupling Worldstack to its APIs.

**Dependencies:** INT-001, INT-003.

**Selection criteria:** browser performance, world-data fit, streaming fit, replaceability, tooling, runtime identity and the ability to keep simulation timing authoritative and independent from render timing.

**Evidence target:** A current browser host decision is supported by executable comparative Evidence and does not make renderer timing part of canonical simulation state.

### INT-009 - Physics and Locomotion PoC

Prove minimum local physical interaction using cheap representation and a replaceable physics boundary.

**Dependencies:** INT-008.

**Selection criteria:** provider replaceability, fixed-step behaviour, deterministic initialisation, replayability, snapshot/restore or equivalent state capture, state comparison/hashing where useful, cross-platform determinism requirements and known nondeterministic inputs outside the solver.

**Evidence target:** Movement, collision, forces, falling, stairs and recovery work without gameplay depending directly on one physics provider; the chosen determinism envelope is explicit and tested.

### INT-010 - Storm Run

Build the first research-backed interactive causal experiment: weather→road state→friction→vehicle behaviour.

**Question:** Is one road-surface friction coefficient sufficient to produce plausible braking and cornering behaviour across the target speed range, or does the model require additional state or interaction terms?

**Dependencies:** INT-007, INT-008, INT-009.

**Evidence target:** Dry, light-rain and heavy-rain runs compare braking/cornering observations under controlled conditions; the same recorded input trace can be replayed with pinned seed, model revisions and runtime identity; the result can support or falsify the scalar-friction model. Final weather rendering is explicitly out of scope.

### INT-011 - Street Racer

Test roads, lanes, junctions, navigation, traffic, vehicle behaviour, collision and basic streaming under sustained player movement.

**Dependencies:** INT-008, INT-009.

**Evidence target:** A repeatable route and workload prove traffic/vehicle/navigation stability against declared criteria and remain a regression fixture. See [INT-011](../../specs/graph/intents/int-011-street-racer.md#evidence-target).

### INT-012 - City Flyover

Represent a much larger cheap city footprint and prove coordinates, partitioning, visibility, prefetch, LOD and memory recovery.

**Dependencies:** INT-004, INT-008.

**Evidence target:** A repeatable traversal proves visibility, streaming and memory recovery within declared budgets, with map-source provenance retained. See [INT-012](../../specs/graph/intents/int-012-city-flyover.md#evidence-target).

### INT-013 - Pursuit Integration Game

Combine validated world, streaming, weather, navigation, traffic, vehicles and physics with the smallest useful police model.

**Dependencies:** INT-010, INT-011, INT-012.

**Evidence target:** Repeatable four-block scenarios prove crime→police, weather→vehicle and streaming-boundary chains; affected earlier fixtures still pass. See [INT-013](../../specs/graph/intents/int-013-pursuit-integration-game.md#evidence-target).

## Completion gate

Roadmap 01 is complete when real Evidence exists for the repository/Pactwright baseline, compact project knowledge, Production Skills capability coverage, validated model/provenance/experiment substrate, cross-system integration, a rendering host decision, Storm Run, Street Racer, City Flyover and Pursuit.

Completion proves the Worldstack experimental substrate and first physical-system compositions. It does not yet prove the wider cross-disciplinary emergence thesis.

## Required programme Graph Review

After INT-013 review architecture, research integrity, model provenance, experiment reproducibility, determinism envelope, integration quality, performance, Production Skills coverage, scope discipline, premature abstraction and Pactwright fit.
