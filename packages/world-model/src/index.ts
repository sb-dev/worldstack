export type ModelFidelity = 0 | 1 | 2 | 3;

export interface EvidenceReference {
  readonly id: string;
  readonly source: string;
}

export interface ModelAssumption {
  readonly id: string;
  readonly statement: string;
}

export interface WorldVariable<T = number | string | boolean> {
  readonly id: string;
  readonly value: T;
  readonly unit?: string;
}

export interface WorldEvent<TPayload = unknown> {
  readonly id: string;
  readonly type: string;
  readonly occurredAtTick: number;
  readonly payload: TPayload;
}

export interface ExecutableModelDescriptor {
  readonly id: string;
  readonly phenomenon: string;
  readonly revision: string;
  readonly fidelity: ModelFidelity;
  readonly assumptions: readonly ModelAssumption[];
  readonly evidence: readonly EvidenceReference[];
  readonly limitations: readonly string[];
}
