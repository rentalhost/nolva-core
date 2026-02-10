export function levenshtein(wordA: string, wordB: string) {
  if (wordA === wordB) {
    return 0;
  }

  const lengthA = wordA.length;
  const lengthB = wordB.length;

  if (!lengthA) {
    return lengthB;
  }

  if (!lengthB) {
    return lengthA;
  }

  let vectorPrevious = new Uint8Array(lengthB + 1);
  let vectorCurrent = new Uint8Array(lengthB + 1);

  for (let j = 0; j <= lengthB; j++) {
    vectorPrevious[j] = j;
  }

  for (let i = 0; i < lengthA; i++) {
    vectorCurrent[0] = i + 1;

    for (let j = 0; j < lengthB; j++) {
      const cost = wordA[i] === wordB[j] ? 0 : 1;

      const del = vectorPrevious[j + 1]! + 1;
      const ins = vectorCurrent[j]! + 1;
      const sub = vectorPrevious[j]! + cost;

      vectorCurrent[j + 1] =
        del < ins ? Math.min(del, sub) : Math.min(ins, sub);
    }

    [vectorPrevious, vectorCurrent] = [vectorCurrent, vectorPrevious];
  }

  return vectorPrevious[lengthB]!;
}
