# INT-001 - Bootstrap Worldstack

## Intent

Establish the minimal pnpm/Turborepo repository, TypeScript baseline, canonical specs, research log, reproducible CI and Pactwright workspace boundary.

## Dependencies

- None

## Contract focus

Authorise the smallest repository foundation required for later experiments. Pin dependency resolution and the exact usable Pactwright Core revision rather than depending on mutable external state.

## Evidence target

Frozen-lockfile install, check, test and build are clean; canonical bootstrap material is present; a pinned Pactwright Core revision can initialise and validate its canonical workspace.

## Scope rule

Do not invent Pactwright or Project Intelligence schemas locally when the selected external implementation is unavailable.
