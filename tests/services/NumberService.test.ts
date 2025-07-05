import { describe, expect, it } from "vitest";

import { clamp } from "@/services/NumberService";

describe("services/NumberService", () => {
  const clampTests = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [-1, 0, 0, 0],
    [-0.5, 0, 1, 0],
    [0.5, 0, 1, 0.5],
    [1.5, 0, 1, 1],
  ] as const;

  it.each(clampTests)("clamp(%j, %j, %k) = %j", (value, min, max, output) => {
    expect(clamp(value, min, max)).toStrictEqual(output);
  });
});
