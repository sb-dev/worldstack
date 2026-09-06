# INT-007 — Cross-System Event PoC

## Intent

Test the smallest event/state exchange allowing two models to interact while remaining independently testable.

## Dependencies

- INT-005
- INT-006

## Contract focus

The canonical Contract for this Intent should authorise the smallest implementation capable of resolving the uncertainty or producing the stated programme outcome. Domain-specific implementation details belong in the Brief and relevant Production Skills.

## Evidence target

A rainfall→road-state interaction works without either model importing the other's internal implementation.

## Scope rule

Do not introduce adjacent capabilities merely because the long-term architecture may eventually need them.
