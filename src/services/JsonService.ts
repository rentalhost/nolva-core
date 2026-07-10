export function parseAs<T>(data: string | null | undefined): T | undefined;

export function parseAs<T>(data: string | null | undefined, defaultValue: T): T;

export function parseAs<T>(data: string | null | undefined, defaultValue?: T): T | undefined {
  if (typeof data !== "string") {
    return defaultValue;
  }

  try {
    return JSON.parse(data) as T;
  } catch {
    return defaultValue;
  }
}
