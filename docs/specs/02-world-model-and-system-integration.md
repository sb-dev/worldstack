# World Model and System Integration

## Purpose

Define the minimum common language required to represent executable models and connect independently evolvable systems.

## Executable model

A model is an executable approximation of a phenomenon. A serious model should identify at least:

- phenomenon;
- revision;
- fidelity;
- evidence references;
- assumptions;
- limitations;
- relevant inputs and outputs.

The bootstrap `@worldstack/world-model` package deliberately implements only this minimum.

Inputs and outputs are behavioural ports, not a universal data schema. The bootstrap contract identifies each port by an id and description. Add richer typing, units or ranges only when real integrations require them.

## Provenance

Assumptions must identify the Evidence references that support them where support exists. An empty evidence list is valid when an assumption is explicit but currently unsupported.

This creates the minimum inspectable chain:

```text
Evidence
→ Assumption
→ Model behaviour
```

The bootstrap does not introduce claim nodes, confidence scoring or a separate provenance graph.

## Fidelity

- L0: heuristic.
- L1: behavioural approximation.
- L2: empirically calibrated.
- L3: specialist high-fidelity simulation.

Higher fidelity is not inherently better. Increase fidelity only when an authorised experiment or product requirement needs it.

## Cross-system integration

Candidate surfaces are events, state, resources, observations, relationships and constraints. These are not yet a universal schema.

The first integration experiment should prove the smallest event/state exchange required by two independent models, for example:

```text
rainfall model
→ precipitation event
→ road-surface model
→ wetness state
```

Only repeated experiments may justify extracting a generic Event Graph.

## Initial time model

Bootstrap `WorldEvent` records one monotonically increasing logical experiment tick for deterministic ordering.

Subsystems may execute at different cadences relative to that clock. Physics may advance every tick while weather, traffic or economics advance less frequently.

Independent subsystem clocks, calendar-time semantics and continuous-time integration remain outside the bootstrap contract until an experiment proves they are required.

## Model replacement

Dependent systems should consume stable behavioural contracts where useful rather than provider-specific or solver-specific internals. This allows fidelity or implementation changes without forcing unrelated systems to be rewritten.

## Separation from runtime state

Model definitions describe behaviour and assumptions. Runtime state contains current entities, values and events. Historical experiment results remain separate again.
