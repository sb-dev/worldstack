# INT-009 - Physics and Locomotion PoC

## Intent

Prove minimum local physical interaction using cheap representation and a replaceable physics boundary.

## Dependencies

- INT-008

## Contract focus

Evaluate provider replaceability and the determinism envelope required by experiments: fixed-step behaviour, deterministic initialisation, replayability, snapshot/restore or equivalent state capture, state comparison/hashing where useful, cross-platform requirements and nondeterministic inputs outside the solver.

## Evidence target

Movement, collision, forces, falling, stairs and recovery work without gameplay depending directly on one physics provider; the chosen determinism envelope is explicit and tested.

## Scope rule

Do not implement advanced vehicle, destruction or active-ragdoll systems in this PoC.
