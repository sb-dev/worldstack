# INT-005 - Model Provenance Contract

## Intent

Make phenomenon, evidence, assumption-to-evidence links, limitations, fidelity and revision inspectable for executable models.

## Dependencies

- INT-004

## Bootstrap status

Candidate provenance fields already exist. This Intent remains open until downstream experiments demonstrate that the links are sufficient for review.

## Contract focus

Add the smallest explicit relationship needed to trace each model assumption to supporting Evidence while allowing unsupported assumptions to remain visible.

## Evidence target

A reviewer can reconstruct why a model behaves as designed, which Evidence supports each assumption, and what the model does not claim.

## Scope rule

Do not introduce confidence scores, claim graphs or a general provenance engine without repeated need.
