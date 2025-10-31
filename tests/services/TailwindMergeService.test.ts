import { describe, expect, it } from "vitest";

import { twMerge } from "@/services/TailwindMergeService";

describe("services/TailwindMergeService", () => {
  it("twMerge", () => {
    expect(twMerge("text-theme-50 text-theme-100")).toBe("text-theme-100");
    expect(twMerge("w-max w-container")).toBe("w-container");
    expect(twMerge("max-md:w-container max-container:w-container")).toBe(
      "max-md:w-container max-container:w-container",
    );
  });
});
