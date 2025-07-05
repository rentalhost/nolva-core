export declare function memoize<const Keys extends string[], Return>(name: string, keys: Keys, callback: (...keys: Keys) => Return): Return;
