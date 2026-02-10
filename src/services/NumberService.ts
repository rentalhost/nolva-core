export function clamp(value: number, min: number, max: number) {
  return value < min ? min : Math.min(value, max);
}
