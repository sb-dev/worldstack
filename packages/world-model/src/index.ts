export type ModelFidelity = 0 | 1 | 2 | 3;

export interface EvidenceReference {
  readonly id: string;
  readonly source: string;
}

export interface ModelAssumption {
  readonly id: string;
  readonly statement: string;
  readonly evidenceIds: readonly string[];
}

export interface ModelPort {
  readonly id: string;
  readonly description: string;
}

export interface WorldVariable<T = number | string | boolean> {
  readonly id: string;
  readonly value: T;
  readonly unit?: string;
}

export interface WorldEvent<TPayload = unknown> {
  readonly id: string;
  readonly type: string;
  /**
   * Monotonic logical experiment tick used for ordering in the bootstrap model.
   * Subsystems may execute at different cadences relative to this clock.
   */
  readonly occurredAtTick: number;
  readonly payload: TPayload;
}

export interface ExecutableModelDescriptor {
  readonly id: string;
  readonly phenomenon: string;
  readonly revision: string;
  readonly fidelity: ModelFidelity;
  readonly inputs: readonly ModelPort[];
  readonly outputs: readonly ModelPort[];
  readonly assumptions: readonly ModelAssumption[];
  readonly evidence: readonly EvidenceReference[];
  readonly limitations: readonly string[];
}
