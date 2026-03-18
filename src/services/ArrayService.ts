export function range(start: number, end: number, step = 1) {
  return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
}

export type Arrayable<T> = T | T[];

export function toArray<T>(value: Arrayable<T>): T[] {
  return Array.isArray(value) ? value : [value];
}

export function shuffle<T>(array: T[]) {
  return array.toSorted(() => Math.random() - 0.5);
}
