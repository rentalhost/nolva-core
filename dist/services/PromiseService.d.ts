export declare function deferPromise<T>(): PromiseWithResolvers<T>;
export declare function promiseAll<const T extends Record<string, Promise<unknown>>>(promises: T): Promise<{ [K in keyof T]: Awaited<T[K]>; }>;
