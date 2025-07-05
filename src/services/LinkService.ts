export function getTarget(src: string | undefined, target: string | undefined) {
  if (target === "_blank" || target === "blank") {
    return "_blank";
  }

  if (target === "_self" || target === "self") {
    return "_self";
  }

  if (src === undefined) {
    return "_blank";
  }

  try {
    const { protocol } = new URL(src);

    if (protocol === "mailto:") {
      return "_self";
    }

    if (protocol !== "http:" && protocol !== "https:") {
      return "_self";
    }
  } catch {
    // Empty.
  }

  return "_blank";
}
