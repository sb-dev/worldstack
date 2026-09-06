import test from "node:test";
import assert from "node:assert/strict";
import type { ExperimentDefinition } from "../src/index.ts";

test("experiment identity pins model revisions and seed", () => {
  const experiment: ExperimentDefinition = {
    id: "weather-road-001",
    question: "How does road wetness affect vehicle behaviour?",
    models: [{ modelId: "weather", revision: "1" }, { modelId: "road-surface", revision: "1" }],
    parameters: { rainIntensity: 0.7 },
    seed: 42
  };
  assert.equal(experiment.models.length, 2);
  assert.equal(experiment.seed, 42);
});
