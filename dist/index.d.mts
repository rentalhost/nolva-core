//#region src/services/ArrayService.d.ts
type Arrayable<T> = T | T[];
declare function chunk<T>(array: T[], size: number): T[][];
declare function pluck<T, K extends keyof T>(array: T[], key: K): Array<T[K]>;
declare function range(start: number, end: number, step?: number): number[];
declare function shuffle<T>(array: T[]): T[];
declare function toArray<T>(value: Arrayable<T>): T[];
declare function unique<T>(array: T[]): T[];
//#endregion
//#region src/services/FileService.d.ts
declare function getExtension(path: string): string | undefined;
//#endregion
//#region src/services/FunctionService.d.ts
declare function noop(): void;
//#endregion
//#region src/services/JsonService.d.ts
declare function parseAs<T>(data: string | null | undefined): T | undefined;
declare function parseAs<T>(data: string | null | undefined, defaultValue: T): T;
//#endregion
//#region src/services/LevenshteinService.d.ts
declare function levenshtein(wordA: string, wordB: string): number;
//#endregion
//#region src/services/LinkService.d.ts
type Target = "_blank" | "_self" | "blank" | "self";
declare function getTarget(src: string | undefined, target: Target | (string & {}) | undefined): "_blank" | "_self";
//#endregion
//#region src/services/MemoizeService.d.ts
declare function memoize<const Keys extends string[], Return>(name: string, keys: Keys, callback: (...keys: Keys) => Return): Return;
//#endregion
//#region src/services/NumberService.d.ts
declare function clamp(value: number, min: number, max: number): number;
declare function formatNumber(value: number, decimals?: number, decimalSeparator?: string, thousandSeparator?: string): string;
//#endregion
//#region src/services/PromiseService.d.ts
declare function deferPromise<T>(): PromiseWithResolvers<T>;
declare function promiseAll<const T extends Record<string, Promise<unknown>>>(promises: T): Promise<{ [K in keyof T]: Awaited<T[K]>; }>;
//#endregion
//#region src/services/RequestService.d.ts
type FetchUrl = Exclude<Parameters<typeof fetch>[0], Request>;
type URLSearchParamsQuery = ConstructorParameters<typeof URLSearchParams>[0];
interface RequestOptions {
  method?: "GET" | "POST";
  url: FetchUrl;
  query?: URLSearchParamsQuery;
  body?: object;
  headers?: HeadersInit;
}
interface RequestResponse<T> {
  success: boolean;
  status: number;
  data?: T;
}
declare function request<T>(options: RequestOptions): Promise<RequestResponse<T>>;
declare function requestText(options: RequestOptions): Promise<RequestResponse<string>>;
//#endregion
//#region src/services/TailwindMergeService.d.ts
declare const twMerge: (...classLists: import("tailwind-merge").ClassNameValue[]) => string;
//#endregion
//#region src/services/WordService.d.ts
declare function removeDiacritics(word: string): string;
declare function slugify(word: string, separator?: string): string;
declare function slugifyId(id: number, word: string): string;
declare function extractSlugId(id: string): number | undefined;
type NormalizationLanguage = "en" | "pt";
declare function normalizeWord(word: string, language?: NormalizationLanguage): string;
declare function similarity(wordA: string, wordB: string): number;
//#endregion
export { type Arrayable, chunk, clamp, deferPromise, extractSlugId, formatNumber, getExtension, getTarget, levenshtein, memoize, noop, normalizeWord, parseAs, pluck, promiseAll, range, removeDiacritics, request, requestText, shuffle, similarity, slugify, slugifyId, toArray, twMerge, unique };