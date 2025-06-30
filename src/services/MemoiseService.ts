const memoizedEntries = new Map<string, unknown>();

export function memoize<const Keys extends string[], Return>(
  name: string,
  keys: Keys,
  callback: (...keys: Keys) => Return,
): Return {
  const key = `${name}:${keys.join(";")}`;

  if (memoizedEntries.has(key)) {
    return memoizedEntries.get(key) as Return;
  }

  const result = callback(...keys);
  memoizedEntries.set(key, result);

  return result;
}
