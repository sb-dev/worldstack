import test from "node:test";
import assert from "node:assert/strict";
import type { ExecutableModelDescriptor } from "../src/index.ts";

test("model descriptors expose behavioural ports and trace assumptions to evidence", () => {
  const model: ExecutableModelDescriptor = {
    id: "weather-l1",
    phenomenon: "local-weather-state",
    revision: "1",
    fidelity: 1,
    inputs: [{ id: "precipitation", description: "Normalised precipitation intensity." }],
    outputs: [{ id: "road-wetness", description: "Normalised road-surface wetness." }],
    assumptions: [
      {
        id: "a1",
        statement: "Four coarse weather states are sufficient for this experiment.",
        evidenceIds: ["e1"]
      }
    ],
    evidence: [{ id: "e1", source: "research/weather.md" }],
    limitations: ["Not an atmospheric forecast model"]
  };

  assert.equal(model.fidelity, 1);
  assert.deepEqual(model.assumptions[0]?.evidenceIds, ["e1"]);
  assert.equal(model.inputs[0]?.id, "precipitation");
  assert.equal(model.outputs[0]?.id, "road-wetness");
});
