import { inspect } from "node:util";

import { describe, expect, it } from "vitest";

import { deferPromise } from "@/services/PromiseService";

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
});
