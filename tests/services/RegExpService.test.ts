import { describe, expect, it } from "vitest";

import { matchGroups } from "#/services/RegExpService";

describe("services/RegExpService", () => {
  const expression = /^(?<year>\d{4})(?:-(?<month>\d{2}))?$/;

  it("returns groups", () => {
    expect(matchGroups<"month" | "year">(expression, "2024-01")).toEqual({
      year: "2024",
      month: "01",
    });
  });

  it("returns undefined for no match", () => {
    expect(matchGroups<"year">(expression, "abcd")).toBeUndefined();
  });

  it("returns undefined for missing groups", () => {
    expect(matchGroups<"month" | "year">(expression, "2024")).toEqual({
      year: "2024",
      month: undefined,
    });
  });
});
