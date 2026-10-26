# Experimentation, Evidence and Emergence

## Purpose

Define how Worldstack turns executable models into reproducible experiments and how unexpected behaviour is handled.

## Experiment identity

A reproducible experiment should identify:

- experiment definition;
- exact model revisions;
- parameters;
- random seed where relevant;
- runtime/environment identity where behaviour depends on it;
- recorded input trace where human or agent input affects the run;
- observations.

The bootstrap experiment model records model revisions, parameters, seed, runtime identity and an optional input-trace reference without creating an experiment platform.

Runtime identity must remain generic. It may pin the Worldstack revision and component revisions such as renderer, physics provider, browser or experiment runtime without making those components part of the generic experiment vocabulary.

## Interactive experiments

A player-driven game becomes a replayable experiment only when the inputs that affect the observation can be reproduced.

The minimum identity for an interactive fixture is:

```text
model revisions
+ parameters
+ seed
+ runtime revisions
+ recorded input trace
→ replayable run
```

Labs may still be useful prototypes without a trace, but they must not claim reproducibility until the relevant inputs are captured.

## Determinism

Provider selection must explicitly evaluate the determinism required by the experiment.

For simulation components this may include fixed-step behaviour, deterministic initialisation, replay on the same runtime, cross-platform determinism, snapshot/restore, state hashing and known sources of nondeterminism outside the solver.

Rendering must not become the authoritative simulation clock. Exact pixel reproduction is not a default experiment requirement.

## Research modes

Worldstack supports two complementary modes:

- confirmatory experimentation: test whether expected behaviour occurs;
- discovery experimentation: search for behaviour not explicitly designed into a subsystem.

## Emergence

An emergent property is a higher-level pattern arising from interactions between simpler components without being directly encoded as a rule of one component.

Unexpected behaviour is not automatically emergence. It may instead indicate an incorrect model, missing system, poor calibration, unstable numerics or unrealistic assumptions.

## Investigation loop

```text
unexpected pattern
→ reproduce
→ trace interactions
→ review assumptions
→ counterfactual intervention
→ sensitivity analysis
→ external research
→ accept/reject candidate finding
```

Counterfactual automation, sensitivity tooling, causal tracing and automated emergence detection are future capabilities. They are not bootstrap requirements.

## Evidence discipline

Simulation Evidence must state what was observed under which models and conditions. It must not silently become a claim about reality.
