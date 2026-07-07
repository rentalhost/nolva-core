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

  for (let index = 0; index <= lengthB; index++) {
    vectorPrevious[index] = index;
  }

  for (let index = 0; index < lengthA; index++) {
    vectorCurrent[0] = index + 1;

    for (let indexB = 0; indexB < lengthB; indexB++) {
      const cost = wordA[index] === wordB[indexB] ? 0 : 1;

      const del = vectorPrevious[indexB + 1]! + 1;
      const ins = vectorCurrent[indexB]! + 1;
      const sub = vectorPrevious[indexB]! + cost;

      vectorCurrent[indexB + 1] = del < ins ? Math.min(del, sub) : Math.min(ins, sub);
    }

    [vectorPrevious, vectorCurrent] = [vectorCurrent, vectorPrevious];
  }

  return vectorPrevious[lengthB]!;
}
