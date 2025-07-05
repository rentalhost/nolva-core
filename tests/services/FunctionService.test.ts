import { describe, expect, it } from "vitest";

import { noop } from "@/services/FunctionService";

describe("services/FunctionService", () => {
  it("noop() = undefined", () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(noop()).toBeUndefined();
  });
});
