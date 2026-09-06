import test from "node:test";
import assert from "node:assert/strict";
import type { ExecutableModelDescriptor } from "../src/index.ts";

test("model descriptors keep phenomenon, revision, assumptions and evidence explicit", () => {
  const model: ExecutableModelDescriptor = {
    id: "weather-l1",
    phenomenon: "local-weather-state",
    revision: "1",
    fidelity: 1,
    assumptions: [{ id: "a1", statement: "Four coarse weather states are sufficient for this experiment." }],
    evidence: [{ id: "e1", source: "research/weather.md" }],
    limitations: ["Not an atmospheric forecast model"]
  };
  assert.equal(model.fidelity, 1);
  assert.equal(model.assumptions.length, 1);
});
