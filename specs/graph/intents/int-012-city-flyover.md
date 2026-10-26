# INT-012 — City Flyover

## Intent

Represent a much larger cheap city footprint and prove coordinates, partitioning, visibility, prefetch, LOD and memory recovery.

## Dependencies

- INT-004
- INT-008

## Contract focus

The canonical Contract for this Intent should authorise the smallest implementation capable of resolving the uncertainty or producing the stated programme outcome. Domain-specific implementation details belong in the Brief and relevant Production Skills.

## Evidence target

Map-derived geography can exceed production-fidelity scope while remaining traversable and streamable.

Define a repeatable traversal that crosses partitions, revisits unloaded areas and returns to its starting area. Pin the dataset revision, runtime, camera/input path and relevant model revisions. Before the run, declare visibility and level-of-detail checks, streaming latency and memory budgets, and the permitted recovery time after unloading.

Record observations at fixed checkpoints, including peak and recovered memory, missing or misplaced geometry, loading gaps and results against each budget. Retain the traversal for regression after coordinate, visibility, partitioning or streaming changes. Apply the [experiment contract](../../../docs/specs/03-experimentation-evidence-and-emergence.md) before claiming replay.

Retain map-source provenance and permitted use through ingestion and derived outputs. Resolve source restrictions before affected data enters production or publication; the [capability map](../../../docs/roadmaps/production-skills-capability-map.md#planned-stress-test-connections) identifies the relevant specialist work.

## Scope rule

Do not introduce adjacent capabilities merely because the long-term architecture may eventually need them.
