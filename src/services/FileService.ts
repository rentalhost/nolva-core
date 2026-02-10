export function getExtension(path: string) {
  return path.includes(".") ? (path.split(".").pop() ?? "") : undefined;
}
