import test from "node:test";
import assert from "node:assert/strict";
import type { ExperimentDefinition } from "../src/index.ts";

test("experiment identity pins models, runtime and interactive input trace", () => {
  const experiment: ExperimentDefinition = {
    id: "weather-road-001",
    question: "Is one road-surface friction coefficient sufficient across the target speed range?",
    models: [
      { modelId: "weather", revision: "1" },
      { modelId: "road-surface", revision: "1" }
    ],
    parameters: { rainIntensity: 0.7, targetSpeedKph: 80 },
    seed: 42,
    runtime: {
      worldstackRevision: "abc123",
      components: {
        renderer: "renderer@1",
        physics: "physics@1",
        browser: "chromium@1"
      }
    },
    inputTrace: {
      id: "storm-run-standard-line",
      contentHash: "sha256:example"
    }
  };

  assert.equal(experiment.models.length, 2);
  assert.equal(experiment.seed, 42);
  assert.equal(experiment.runtime.components.physics, "physics@1");
  assert.equal(experiment.inputTrace?.id, "storm-run-standard-line");
});
