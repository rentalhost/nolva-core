import { inspect } from "node:util";

import { describe, expect, it } from "vitest";

import { deferPromise, promiseAll } from "@/services/PromiseService";

describe("services/PromiseService", () => {
  it("deferPromise", async () => {
    expect.assertions(5);

    const { promise, resolve } = deferPromise();

    expect(promise).toBeInstanceOf(Promise);
    expect(resolve).toBeTypeOf("function");

    expect(inspect(promise)).toBe("Promise { <pending> }");

    resolve(123);

    await expect(promise).resolves.toBe(123);

    expect(inspect(promise)).toBe("Promise { 123 }");
  });

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
