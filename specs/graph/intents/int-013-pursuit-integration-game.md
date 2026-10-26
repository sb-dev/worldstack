# INT-013 — Pursuit Integration Game

## Intent

Combine validated world, streaming, weather, navigation, traffic, vehicles and physics with the smallest useful police model.

## Dependencies

- INT-010
- INT-011
- INT-012

## Contract focus

The canonical Contract for this Intent should authorise the smallest implementation capable of resolving the uncertainty or producing the stated programme outcome. Domain-specific implementation details belong in the Brief and relevant Production Skills.

## Evidence target

A four-block pursuit survives crime→police, weather→vehicle and streaming-boundary chains without production-quality assets.

Retain repeatable scenarios for each chain and their combined four-block run. Pin initial conditions, model/runtime revisions, seed and relevant input traces. Define the expected observations, comparison rules and runtime budgets before execution under the [experiment contract](../../../docs/specs/03-experimentation-evidence-and-emergence.md).

Record results per interaction so a passing subsystem cannot conceal a failing integration. After integration changes, rerun the affected Storm Run, Street Racer and City Flyover fixtures and retain their results with the Pursuit evidence. Diagnose and repair the smallest responsible scope under [specification 06](../../../docs/specs/06-repository-and-development-process.md#correction).

## Scope rule

Do not introduce adjacent capabilities merely because the long-term architecture may eventually need them.
