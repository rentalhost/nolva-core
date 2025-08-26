export declare function removeDiacritics(word: string): string;
export declare function slugify(word: string, separator?: string): string;
export declare function slugifyId(id: number, word: string): string;
export declare function extractSlugId(id: string): number | undefined;
type NormalizationLanguage = "en" | "pt";
export declare function normalizeWord(word: string, language?: NormalizationLanguage): string;
export declare function similarity(wordA: string, wordB: string): number;
export {};
