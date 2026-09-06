# Roadmap 01 — Foundation to Pursuit

## Objective

Prove the first complete Worldstack chain:

```text
research + model + experiment + browser runtime
→ permanent test games
→ first integration game
```

The roadmap intentionally stops before a full city-block vertical slice.

## Waves

| Wave | Intents | Purpose |
|---|---|---|
| 0 | INT-001..003 | programme foundation |
| 1 | INT-004..007 | model + experiment substrate |
| 2 | INT-008..011 | browser and interactive system experiments |
| 3 | INT-012..013 | world breadth + first major composition |

## Intents

### INT-001 — Bootstrap Worldstack

Establish the minimal pnpm/Turborepo repository, TypeScript baseline, canonical specs, research log, CI and Pactwright workspace boundary.

**Dependencies:** none.

**Evidence target:** Clean install, check, test and build; canonical bootstrap material is present.

### INT-002 — Bootstrap Project Intelligence

Turn founding research and architecture decisions into compact accepted project knowledge usable by later Contract crafting.

**Dependencies:** INT-001.

**Evidence target:** Later Briefs can consume accepted conclusions without loading the full research corpus.

### INT-003 — Production Skills Capability Baseline

Classify the Production Skills needed by Roadmap 01 as available, partial, incubating, missing or not-yet-required.

**Dependencies:** INT-001.

**Evidence target:** A capability map exists without prematurely creating new skill repositories.

### INT-004 — Minimal World Model

Create the smallest engine-neutral model vocabulary required by the first experiments.

**Dependencies:** INT-001, INT-002.

**Evidence target:** At least two unrelated PoCs can use the model contract without changing its basic semantics.

### INT-005 — Model Provenance Contract

Make phenomenon, evidence, assumptions, limitations, fidelity and revision inspectable for executable models.

**Dependencies:** INT-004.

**Evidence target:** A reviewer can reconstruct why a model behaves as designed and what it does not claim.

### INT-006 — Reproducible Experiment Harness

Provide minimal experiment identity, parameters, model revisions, seed and observation recording.

**Dependencies:** INT-004.

**Evidence target:** An experiment definition can be reconstructed and rerun without an experiment platform.

### INT-007 — Cross-System Event PoC

Test the smallest event/state exchange allowing two models to interact while remaining independently testable.

**Dependencies:** INT-005, INT-006.

**Evidence target:** A rainfall→road-state interaction works without either model importing the other's internal implementation.

### INT-008 — Rendering Host Evaluation

Compare browser rendering hosts with equivalent world data and workload, selecting an initial host without coupling Worldstack to its APIs.

**Dependencies:** INT-001, INT-003.

**Evidence target:** A current browser host decision is supported by executable comparative Evidence.

### INT-009 — Physics and Locomotion PoC

Prove minimum local physical interaction using cheap representation and a replaceable physics boundary.

**Dependencies:** INT-008.

**Evidence target:** Movement, collision, forces, falling, stairs and recovery work without gameplay depending directly on one physics provider.

### INT-010 — Storm Run

Build the first research-backed interactive causal experiment: weather→road state→friction→vehicle behaviour.

**Dependencies:** INT-007, INT-008, INT-009.

**Evidence target:** Weather/road/vehicle integration edges are exercised in a permanent small game; final weather rendering is explicitly out of scope.

### INT-011 — Street Racer

Test roads, lanes, junctions, navigation, traffic, vehicle behaviour, collision and basic streaming under sustained player movement.

**Dependencies:** INT-008, INT-009.

**Evidence target:** Traffic/vehicle/navigation interactions remain stable across several connected primitive streets.

### INT-012 — City Flyover

Represent a much larger cheap city footprint and prove coordinates, partitioning, visibility, prefetch, LOD and memory recovery.

**Dependencies:** INT-004, INT-008.

**Evidence target:** Map-derived geography can exceed production-fidelity scope while remaining traversable and streamable.

### INT-013 — Pursuit Integration Game

Combine validated world, streaming, weather, navigation, traffic, vehicles and physics with the smallest useful police model.

**Dependencies:** INT-010, INT-011, INT-012.

**Evidence target:** A four-block pursuit survives crime→police, weather→vehicle and streaming-boundary chains without production-quality assets.

## Completion gate

Roadmap 01 is complete when real Evidence exists for the repository/Pactwright baseline, compact project knowledge, Production Skills capability coverage, model/provenance/experiment substrate, cross-system integration, a rendering host decision, Storm Run, Street Racer, City Flyover and Pursuit.

## Required programme Graph Review

After INT-013 review architecture, research integrity, model provenance, integration quality, performance, Production Skills coverage, scope discipline, premature abstraction and Pactwright fit.
