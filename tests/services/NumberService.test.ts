import { describe, expect, it } from "vitest";

import { clamp, formatNumber } from "@/services/NumberService";

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

  const formatNumberTests = [
    [0, 0, ".", "", "0"],
    [1, 0, ".", "", "1"],
    [-1, 0, ".", "", "-1"],
    [1.5, 0, ".", "", "2"],
    [1.4, 0, ".", "", "1"],
    [1.234, 2, ".", "", "1.23"],
    [1.235, 2, ".", "", "1.24"],
    [1.5, 2, ".", "", "1.50"],
    [1234, 0, ".", ",", "1,234"],
    [1_234_567, 0, ".", ",", "1,234,567"],
    [1_234_567.89, 2, ".", ",", "1,234,567.89"],
    [1234.5, 2, ",", ".", "1.234,50"],
    [0.5, 1, ",", "", "0,5"],
    [1000, 0, ".", " ", "1 000"],
    [-1234.56, 2, ".", ",", "-1,234.56"],
    [100, 0, ".", ",", "100"],
    [999, 0, ".", ",", "999"],
  ] as const;

  it.each(formatNumberTests)(
    "formatNumber(%j, %j, %j, %j) = %j",
    (value, decimals, decimalSeparator, thousandSeparator, expected) => {
      expect(formatNumber(value, decimals, decimalSeparator, thousandSeparator)).toStrictEqual(
        expected,
      );
    },
  );
});
