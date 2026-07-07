import { describe, expect, it } from "vitest";

import { getExtension } from "#/services/FileService";

describe("services/FileService", () => {
  // eslint-disable-next-line unicorn/no-non-function-verb-prefix
  const getExtensionTests = [
    ["example.bin", "bin"],
    ["example.test.bin", "bin"],
    ["example.BIN", "BIN"],
    ["example", undefined],
  ] as const;

  it.each(getExtensionTests)("getExtension(%j) = %j", (input, output) => {
    expect(getExtension(input)).toStrictEqual(output);
  });
});
