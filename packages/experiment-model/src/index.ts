export interface ModelRevisionRef {
  readonly modelId: string;
  readonly revision: string;
}

export interface ExperimentDefinition {
  readonly id: string;
  readonly question: string;
  readonly models: readonly ModelRevisionRef[];
  readonly parameters: Readonly<Record<string, number | string | boolean>>;
  readonly seed: number;
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
