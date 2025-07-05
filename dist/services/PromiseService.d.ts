export declare function deferPromise<T>(): {
    promise: Promise<T>;
    resolve: (value: T) => void;
};
