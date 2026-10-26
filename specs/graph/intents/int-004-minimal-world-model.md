# INT-004 - Minimal World Model

## Intent

Create the smallest engine-neutral model vocabulary required by the first experiments.

## Dependencies

- INT-001
- INT-002

## Bootstrap status

A candidate implementation already exists in `@worldstack/world-model`.

This Intent does not retroactively authorise that bootstrap code. It remains open until downstream use validates the candidate contract or forces revision.

## Contract focus

Validate the existing minimum before extending it: phenomenon, revision, fidelity, behavioural inputs/outputs, assumptions, Evidence references and limitations.

## Evidence target

At least two unrelated Roadmap 01 consumers can use the model contract without changing its basic semantics.

## Scope rule

Do not introduce a universal state/event schema or richer port typing until repeated integrations require it.
