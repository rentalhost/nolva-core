export function deferPromise<T>() {
  return Promise.withResolvers<T>();
}

export async function promiseAll<const T extends Record<string, Promise<unknown>>>(promises: T) {
  const keys = Object.keys(promises);
  const results = await Promise.all(Object.values(promises));

  return Object.fromEntries(results.map((result, index) => [keys[index], result])) as Promise<{
    [K in keyof T]: Awaited<T[K]>;
  }>;
}
