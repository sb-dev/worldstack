import type { ExperimentDefinition } from "../src/index.ts";

// @ts-expect-error reproducible experiment identity must include the runtime revision set.
const missingRuntime: ExperimentDefinition = {
  id: "invalid",
  question: "Can this run be reproduced?",
  models: [],
  parameters: {},
  seed: 1
};

void missingRuntime;
