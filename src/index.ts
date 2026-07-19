export type { Arrayable } from "#/services/ArrayService";

export { chunk, pluck, range, shuffle, toArray, unique } from "#/services/ArrayService";

export { getExtension } from "#/services/FileService";

export { noop } from "#/services/FunctionService";

export { parseAs } from "#/services/JsonService";

export { levenshtein } from "#/services/LevenshteinService";

export { getTarget } from "#/services/LinkService";

export { memoize } from "#/services/MemoizeService";

export { clamp, formatNumber } from "#/services/NumberService";

export { deferPromise, promiseAll } from "#/services/PromiseService";

export { request, requestText } from "#/services/RequestService";

export { twMerge } from "#/services/TailwindMergeService";

export {
  removeDiacritics,
  normalizeWord,
  slugify,
  slugifyId,
  extractSlugId,
  similarity,
} from "#/services/WordService";
