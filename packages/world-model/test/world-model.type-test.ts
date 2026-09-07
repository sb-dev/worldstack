import type { ExecutableModelDescriptor } from "../src/index.ts";

// @ts-expect-error executable model contracts must declare behavioural inputs and outputs.
const missingPorts: ExecutableModelDescriptor = {
  id: "invalid",
  phenomenon: "example",
  revision: "1",
  fidelity: 0,
  assumptions: [],
  evidence: [],
  limitations: []
};

void missingPorts;
