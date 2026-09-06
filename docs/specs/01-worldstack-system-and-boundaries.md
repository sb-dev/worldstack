# Worldstack System and Boundaries

## Purpose

Define Worldstack's governing conceptual boundary.

Worldstack is a composable real-world systems modelling and experimentation platform. It turns multidisciplinary research into executable models, composes those models into simulations and games, and uses observations to refine models and generate new questions.

## System model

```text
Reality
→ observation / research
→ model
→ assumptions
→ executable mechanic
→ simulation / experiment
→ observation
→ analysis
→ model revision
```

A real-world validation path may continue from a simulation-derived hypothesis into an external experiment and new evidence.

## System of systems

Worldstack does not attempt one universal simulation. Independently understandable systems may cover physical, environmental, biological, cognitive, social, economic, institutional, cultural, technological, information, formal and conceptual phenomena.

Each subsystem models only the phenomena it owns. Cross-system interaction is more important than maximal fidelity inside every subsystem.

## Knowledge integrity

Worldstack must distinguish observation, model, hypothesis, simulation result and real-world result. Internally coherent simulation behaviour is not automatically real-world truth.

## Ownership boundaries

- Pactwright owns authorised Delivery, provenance and accepted project knowledge.
- Worldstack owns domain models, simulation state and experiment semantics.
- Production Skills own reusable specialist production expertise.
- Turborepo owns technical build/test dependency execution.

## Non-goals

Worldstack does not initially:

- model reality comprehensively;
- define a universal scientific ontology;
- maximise fidelity in every subsystem;
- replace specialist scientific simulators;
- treat game mechanics as scientific facts;
- classify unexpected behaviour as discovery without investigation;
- pre-design all future subsystem abstractions.

## Development doctrine

Research one phenomenon. Encode the smallest useful model. Test it. Compose it with another validated model. Observe expected and unexpected behaviour. Investigate. Refine. Extract reusable abstractions only after repeated concrete need.
