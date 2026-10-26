# Repository and Development Process

## Purpose

Define how Worldstack grows without speculative architecture.

## Bootstrap rule

At every proposed addition ask:

> Does an authorised Intent require this now?

If yes, create the smallest adequate implementation. If no, leave it conceptual.

## Adopting pre-Pactwright bootstrap work

Bootstrap code may exist before the selected Pactwright runtime is installed. Seed Intents may adopt that code as a candidate implementation, but they do not retroactively authorise the earlier work.

Such an Intent remains open until its Contract, Brief, Review and Evidence validate the existing implementation or replace it.

This preserves history while preventing "already coded" from being treated as "already proven".

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
