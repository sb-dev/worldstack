import test from "node:test";
import assert from "node:assert/strict";
import { seededRandom } from "../src/index.ts";

test("same seed produces the same sequence", () => {
  const a = seededRandom(123);
  const b = seededRandom(123);
  assert.deepEqual([a(), a(), a()], [b(), b(), b()]);
});
