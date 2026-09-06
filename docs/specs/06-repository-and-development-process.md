# Repository and Development Process

## Purpose

Define how Worldstack grows without speculative architecture.

## Bootstrap rule

At every proposed addition ask:

> Does an authorised Intent require this now?

If yes, create the smallest adequate implementation. If no, leave it conceptual.

## Fundamental development unit

The development unit is a question or hypothesis followed by the smallest implementation capable of producing useful evidence.

## Correction

```text
failure
→ identify owning model / implementation / integration edge / representation
→ preserve valid work
→ repair smallest sufficient scope
→ rerun smallest useful experiment
→ rerun affected integrations
```

## Composition

Validated capabilities should deliberately be combined. Integration edges require their own evidence; proven subsystems do not imply proven composition.

## Capability maturity

Worldstack may describe capabilities as:

```text
HYPOTHESIS
→ POC-PROVEN
→ GAME-PROVEN
→ INTEGRATION-PROVEN
→ SLICE-PROVEN
→ WORLD-PROVEN
→ PRODUCTION
```

These are project-derived views, not Pactwright lifecycle states.

## Extraction rule

Only extract a reusable subsystem or shared abstraction once multiple concrete experiments genuinely require substantially the same concept.

## Monorepo rule

Turborepo answers what is technically affected. Pactwright answers what authorised outcome must still hold. Production Skills answer how specialist work is performed and evaluated.
