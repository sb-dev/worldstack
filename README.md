# Worldstack

Worldstack is a composable real-world systems modelling and experimentation platform. It turns multidisciplinary research into executable models, combines them in simulations and games, and uses observations to refine models and generate new questions. Smaller intermediary games are permanent experiments, integration tests and regression environments on the path to an open-world game.

The initial programme is browser-first. Its first roadmap establishes the model, experiment and runtime foundations through physical-system experiments. The wider cross-disciplinary programme builds on that evidence.

## Design

| Decision | Owning specification |
|---|---|
| Distinguish observations, models, hypotheses, simulation results and real-world results. Investigate unexpected behaviour before calling it a discovery. | [System boundaries](docs/specs/01-worldstack-system-and-boundaries.md#knowledge-integrity) and [evidence](docs/specs/03-experimentation-evidence-and-emergence.md#emergence) |
| Keep models engine-neutral, with explicit inputs, outputs, revisions, assumptions, evidence and limitations. Increase fidelity only when an experiment needs it. | [World model](docs/specs/02-world-model-and-system-integration.md) |
| Identify experiments by model revisions, parameters, seed, runtime and relevant recorded inputs. Prove replay within declared runtime conditions. | [Experiment identity and replay](docs/specs/03-experimentation-evidence-and-emergence.md) |
| Keep simulation state separate from visual, narrative and musical representation. Model fidelity and presentation fidelity can advance independently. | [Game and representation](docs/specs/04-game-world-and-representation.md) |
| Give Worldstack ownership of models and runtime state, Pactwright delivery authority, Production Skills specialist workflows and Turborepo technical dependencies. | [Integration](docs/specs/05-production-skills-and-pactwright-integration.md) and [development process](docs/specs/06-repository-and-development-process.md) |

Research one phenomenon, build the smallest useful model, validate it, then compose it with another validated model. Preserve test games as executable fixtures. Extract reusable abstractions only after repeated concrete need. The [specification index](docs/specs/README.md) identifies all six canonical documents.

## Roadmap

| Wave | Outcome | Intents |
|---|---|---|
| **Current: foundation** | Verify the repository, establish governance and project knowledge, and assess specialist capability coverage. | INT-001–003 |
| Model and experiment substrate | Validate existing bootstrap contracts, model provenance, replay and a rainfall-to-road interaction. | INT-004–007 |
| Browser experiments | Evaluate rendering and physics, then build Storm Run and Street Racer. | INT-008–011 |
| World breadth and composition | Prove streaming with City Flyover and combine validated capabilities in Pursuit. | INT-012–013 |

The repository contains candidate `world-model`, `experiment-model` and `test-harness` packages. Their acceptance still requires downstream evidence. The test games and browser applications remain planned. See [Roadmap 01](docs/roadmaps/01-foundation-to-pursuit.md#evidence-baseline) for the inspected baseline, unresolved gates and acceptance targets.

Later cross-disciplinary experiments, vertical/world slices and open-world integration follow the [programme direction](docs/roadmaps/README.md#later-direction). Roadmap 01 alone does not establish the wider emergence thesis. The [Production Skills capability map](docs/roadmaps/production-skills-capability-map.md) records inspected sources and planned integration tests.

## Stack

| Responsibility | Current technology or decision |
|---|---|
| Model and experiment contracts | TypeScript |
| Verification runtime | Node.js 22 or later; CI uses Node.js 22 |
| Workspace and dependency resolution | pnpm 10.15.0 with a committed lockfile |
| Build, type-check and test execution | Turborepo, TypeScript and Node's test runner |
| Repository automation | GitHub Actions |
| Browser rendering and physics | Provider choices remain under INT-008 and INT-009 evaluation |
| Delivery and specialist production | Pactwright and Production Skills integration is specified; exact usable revisions remain to be selected and verified |

## Getting started

Use Node.js 22 or later with Corepack available. From the repository root:

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm verify
```

Run a focused check when needed:

```bash
corepack pnpm check
corepack pnpm test
corepack pnpm build
```

These commands verify the bootstrap packages. They do not launch a game or prove roadmap acceptance.

## Repository map

| Path | Purpose |
|---|---|
| `apps/` | Executable labs, integration games and slices as they are authorised |
| `packages/` | Reusable runtime/model packages |
| `docs/specs/` | Canonical Worldstack design specifications |
| `docs/research-logs/` | Research and design evidence |
| `docs/roadmaps/` | Programme views and capability assessment |
| `specs/graph/intents/` | Plain Markdown bootstrap Intents for Pactwright adoption |
| `.pactwright/` | Reserved for configuration generated by the selected Pactwright runtime |

See [Contributing](CONTRIBUTING.md) for scope and ownership rules.
