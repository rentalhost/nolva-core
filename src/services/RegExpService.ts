type MatchGroups<Group extends string> = Record<Group, string | undefined>;

export function matchGroups<GroupName extends string>(expression: RegExp, value: string) {
  return expression.exec(value)?.groups as MatchGroups<GroupName> | undefined;
}
