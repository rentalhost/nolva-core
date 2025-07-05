import { describe, expect, it } from "vitest";

import { range } from "@/services/ArrayService";

describe("services/ArrayService", () => {
  const rangeTests = [
    // Step = 1
    [0, 0, undefined, [0]],
    [1, 1, undefined, [1]],
    [0, 2, undefined, [0, 1, 2]],
    [-1, 1, undefined, [-1, 0, 1]],
    // Step = 2
    [0, 1, 2, [0]],
    [0, 2, 2, [0, 2]],
    [-1, 2, 2, [-1, 1]],
    // Step = 1.5
    [0, 2, 1.5, [0, 1.5]],
    [0, 3, 1.5, [0, 1.5, 3]],
  ] as const;

  it.each(rangeTests)("range(%j, %j, %j) = %j", (from, to, step, output) => {
    expect(range(from, to, step)).toStrictEqual(output);
  });
});
