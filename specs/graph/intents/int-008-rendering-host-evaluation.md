# INT-008 - Rendering Host Evaluation

## Intent

Compare browser rendering hosts with equivalent world data and workload, selecting an initial host without coupling Worldstack to its APIs.

## Dependencies

- INT-001
- INT-003

## Contract focus

Evaluate equivalent scenes using the same world data, assets, camera and workload. Include browser performance, world-data fit, streaming fit, tooling, replaceability, runtime identity and separation of simulation timing from render timing.

## Evidence target

A current browser host decision is supported by executable comparative Evidence and does not make renderer timing authoritative simulation state.

## Scope rule

Do not turn the selected rendering host into the canonical world, simulation or gameplay data model.
