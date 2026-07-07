import { describe, expect, it } from "vitest";

import { noop } from "#/services/FunctionService";

describe("services/FunctionService", () => {
  it("noop() = undefined", () => {
    expect(noop()).toBeUndefined();
  });
});
