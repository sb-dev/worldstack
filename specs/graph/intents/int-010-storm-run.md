# INT-010 - Storm Run

## Intent

Build the first research-backed interactive causal experiment: weather→road state→friction→vehicle behaviour.

## Question

Is one road-surface friction coefficient sufficient to produce plausible braking and cornering behaviour across the target speed range, or does the model require additional state or interaction terms?

## Dependencies

- INT-007
- INT-008
- INT-009

## Contract focus

Hold route, vehicle setup and input trace constant while comparing dry, light-rain and heavy-rain conditions. Record the trace and pin seed, model revisions and runtime identity so the fixture can be replayed.

## Evidence target

Braking and cornering observations can support or falsify the scalar-friction model; weather/road/vehicle integration edges are exercised in a permanent replayable small game.

## Scope rule

Final weather rendering, production vehicle assets and final driving balance are explicitly out of scope.
