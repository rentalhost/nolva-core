type MatchGroups<G extends string> = Record<G, string | undefined>;

export function matchGroups<GroupName extends string>(expression: RegExp, value: string) {
  const groups = expression.exec(value)?.groups;

  if (!groups) {
    return undefined;
  }

  return groups as MatchGroups<GroupName>;
}
