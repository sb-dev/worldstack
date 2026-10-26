# INT-006 - Reproducible Experiment Harness

## Intent

Provide minimal experiment identity, parameters, model revisions, seed, runtime identity, input-trace identity and observation recording.

## Dependencies

- INT-004

## Bootstrap status

A candidate implementation already exists in `@worldstack/experiment-model`.

This Intent remains open until an interactive experiment proves that the recorded identity is sufficient for replay.

## Contract focus

Keep runtime identity generic and represent recorded interactive input by an immutable trace reference and content hash.

## Evidence target

An experiment definition can be reconstructed and rerun without an experiment platform; an interactive fixture can replay the same trace against the same seed, model revisions and runtime identity.

Use a small fixture with recorded input events to prove this gate independently of Storm Run and rendering/physics provider selection. Retain the trace, its content hash, pinned experiment identity, expected observations and replay result. Declare the comparison rule before the run, including any justified tolerance. This proves the fixture's replay boundary, not later browser or solver determinism.

## Scope rule

Do not build a general experiment platform, trace recorder or orchestration service until a concrete lab requires it.
