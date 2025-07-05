export declare function deferPromise<T>(): {
    promise: Promise<T>;
    resolve: (value: T) => void;
};
export declare function promiseAll<const T extends Record<string, Promise<unknown>>>(promises: T): Promise<{ [K in keyof T]: Awaited<T[K]>; }>;
