import { describe, expect, it } from "vitest";

import { promiseAll } from "#/services/PromiseService";

describe("services/PromiseService", () => {
  it("promiseAll", async () => {
    expect.assertions(1);

    const promise = promiseAll({
      testA: Promise.resolve(1),
      testB: Promise.resolve(2),
      testC: Promise.resolve(3),
    });

    await expect(promise).resolves.toStrictEqual({
      testA: 1,
      testB: 2,
      testC: 3,
    });
  });
});
