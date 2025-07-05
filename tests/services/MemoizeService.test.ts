import { describe, expect, it } from "vitest";

import { normalizeWord } from "@/index";
import { memoize } from "@/services/MemoizeService";

describe("services/CacheService", () => {
  function normalizeMemoise(phrase: string) {
    return memoize("normalize", [phrase], normalizeWord);
  }

  it("memoize", () => {
    expect(normalizeMemoise("example")).toBe("esample");
    expect(normalizeMemoise("testing")).toBe("testimg");
  });
});
