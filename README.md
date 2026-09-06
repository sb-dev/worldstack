# Worldstack

Worldstack is a composable real-world systems modelling and experimentation platform that turns multidisciplinary research into executable mechanics, integrates those mechanics into simulations and games, and uses expected and emergent behaviour to improve models and generate new questions.

This repository is the initial browser-first Worldstack programme and the first proving ground for the wider platform.

## Development model

```text
research
→ smallest useful model
→ validate
→ experiment
→ observe
→ compose
→ integration experiment
→ investigate expected + unexpected behaviour
→ refine
→ extract reusable abstraction only when justified
```

Pactwright governs authorised work and evidence. Worldstack owns its models, experiments and runtime state. Production Skills provide reusable specialist expertise. Turborepo owns the technical build graph.

## Bootstrap scope

The repository deliberately starts small. It contains only the shared substrate required by the first roadmap:

- `world-model`: minimum engine-neutral model vocabulary;
- `experiment-model`: reproducible experiment definitions and run metadata;
- `test-harness`: deterministic experiment helpers;
- six canonical design specs;
- the founding Worldstack research log;
- the first 13-Intent roadmap, ending with the Pursuit integration game.

New simulation packages and applications should be added only when an authorised Intent requires them.

## Commands

```bash
corepack pnpm install
corepack pnpm check
corepack pnpm test
corepack pnpm build
```

## Repository map

```text
apps/                  executable labs, integration games and slices
packages/              reusable runtime/model packages
docs/specs/            canonical Worldstack design specs
docs/research-logs/    research and design evidence
docs/roadmaps/         programme roadmaps
specs/graph/intents/   initial Intent backlog for Pactwright adoption
.pactwright/            Pactwright-owned runtime/configuration area
```

## Current roadmap

Roadmap 01 progresses from repository foundation to the first integrated police-pursuit experiment:

`foundation → model substrate → experiments → Storm Run / Street Racer / City Flyover → Pursuit`

See [`docs/roadmaps/01-foundation-to-pursuit.md`](docs/roadmaps/01-foundation-to-pursuit.md).
