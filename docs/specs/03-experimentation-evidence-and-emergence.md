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
- observations.

The bootstrap experiment model stores the first five domain concepts without creating an experiment platform.

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
