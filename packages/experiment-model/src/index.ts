export interface ModelRevisionRef {
  readonly modelId: string;
  readonly revision: string;
}

export interface ExperimentRuntimeIdentity {
  readonly worldstackRevision: string;
  readonly components: Readonly<Record<string, string>>;
}

export interface ExperimentInputTraceRef {
  readonly id: string;
  readonly contentHash: string;
}

export interface ExperimentDefinition {
  readonly id: string;
  readonly question: string;
  readonly models: readonly ModelRevisionRef[];
  readonly parameters: Readonly<Record<string, number | string | boolean>>;
  readonly seed: number;
  readonly runtime: ExperimentRuntimeIdentity;
  readonly inputTrace?: ExperimentInputTraceRef;
}

export interface ExperimentObservation {
  readonly key: string;
  readonly value: number | string | boolean;
  readonly unexpected?: boolean;
}

export interface ExperimentRun {
  readonly runId: string;
  readonly definition: ExperimentDefinition;
  readonly observations: readonly ExperimentObservation[];
}
