# INT-011 — Street Racer

## Intent

Test roads, lanes, junctions, navigation, traffic, vehicle behaviour, collision and basic streaming under sustained player movement.

## Dependencies

- INT-008
- INT-009

## Contract focus

The canonical Contract for this Intent should authorise the smallest implementation capable of resolving the uncertainty or producing the stated programme outcome. Domain-specific implementation details belong in the Brief and relevant Production Skills.

## Evidence target

Traffic/vehicle/navigation interactions remain stable across several connected primitive streets.

Before execution, define a repeatable route, traffic workload, run duration and runtime identity. Declare observable pass criteria for navigation progress, collision behaviour, streaming transitions and the selected performance budget. Record relevant inputs, seed, model revisions, observations and results under the [experiment contract](../../../docs/specs/03-experimentation-evidence-and-emergence.md).

Retain the scenario as a regression fixture. Replay it after affected vehicle, traffic, navigation, physics or streaming changes. Report failures by owning subsystem or integration edge. Do not claim reproducibility until input capture and replay work; the shared experiment contract must be validated for this use before acceptance, even if prototype work starts earlier.

## Scope rule

Do not introduce adjacent capabilities merely because the long-term architecture may eventually need them.
