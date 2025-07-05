import { levenshtein } from "@/services/LevenshteinService";

export function removeDiacritics(word: string) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function slugify(word: string, separator = "-") {
  return removeDiacritics(word.trim().toLowerCase())
    .replaceAll(/\W+/g, separator)
    .replaceAll(/^-+|-+$/g, "");
}

export function slugifyId(id: number, word: string) {
  return `${id}-${slugify(word)}`;
}

const normalizationRules = new Map<number, Map<string, string>>([
  [
    1,
    new Map<string, string>([
      ["c", "k"], // cafe => kafe
      ["l", "u"], // album => aubum
      ["r", ""], // arvore => avore
      ["h", ""], // helicoptero => elicoptero
      ["z", "s"], // nariz => naris
      ["x", "s"], // texto => testo
      ["n", "m"], // quanto => quamto
      ["b", "bi"], // objetivo => obijetivo
      ["w", "u"], // web => ueb
      ["y", "i"], // yoga => ioga
    ]),
  ],
  [
    2,
    new Map<string, string>([
      ["ce", "se"], // face => fase
      ["ci", "si"], // facil => fasil
      ["ss", "s"], // pessego = pesego
      ["xc", "s"], // excesso => esesso
      ["rr", "r"], // carro = caro
      ["ch", "s"], // chave = save
      ["qu", "k"], // quanto => kanto
      ["gu", "g"], // guerra => gerra
      ["ei", "e"], // queijo => quejo
      ["lh", "l"], // guilherme => guilerme
      ["ph", "f"], // photo => foto
      ["th", "t"], // thomas => tomas
      ["rh", "r"], // rhapsody => rapsody
      ["by", "bi"], // byte => bite
      ["sy", "si"], // system => sistem
      ["oo", "o"], // enjoo => enjo
      ["mn", "min"], // mnemonico => minemonico
      ["pn", "pin"], // pneu => pineu
      ["ps", "pis"], // psicologia => pisicologia
      ["gn", "gin"], // agnostico => aginostico
      // Keep.
      ["ba", "ba"],
      ["be", "be"],
      ["bi", "bi"],
      ["bo", "bo"],
      ["bu", "bu"],
      ["la", "la"],
      ["le", "le"],
      ["li", "li"],
      ["lo", "lo"],
      ["lu", "lu"],
      ["ra", "ra"],
      ["re", "re"],
      ["ri", "ri"],
      ["ro", "ro"],
      ["ru", "ru"],
      ["ma", "ma"],
      ["me", "me"],
      ["mi", "mi"],
      ["mo", "mo"],
      ["mu", "mu"],
      ["na", "na"],
      ["ne", "ne"],
      ["ni", "ni"],
      ["no", "no"],
      ["nu", "nu"],
    ]),
  ],
  [
    3,
    new Map<string, string>([
      ["cao", "sao"], // a[cao] => asao
      ["coe", "soe"], // cancoes => cansoes
      ["bri", "br"], // equilibrio => equilibro
      ["s**", ""], // cancoes => cancoe
      ["l**", "u"], // facil => faciu
      ["ti*", "te"], // jabuti => jabute
      ["ult", "ut"], // ultimo => utimo
    ]),
  ],
]);

export function normalizeWord(word: string) {
  const slug = `${slugify(word)}**`;
  const slugLength = slug.length - 2;

  let normalization = "";

  let position = 0;

  positionLoop: while (position < slugLength) {
    for (let size = 3; size >= 1; size--) {
      const wordSubstring = slug.substring(position, position + size);
      const wordNormalization = normalizationRules
        .get(size)
        ?.get(wordSubstring);

      if (wordNormalization !== undefined) {
        normalization += wordNormalization;
        position += size;

        continue positionLoop;
      }
    }

    normalization += slug[position];

    position++;
  }

  return normalization;
}

export function similarity(wordA: string, wordB: string) {
  if (wordA === wordB) {
    return 1;
  }

  if (wordA === "" || wordB === "") {
    return 0;
  }

  const wordALength = wordA.length;
  const wordBLength = wordB.length;

  const maxLength = Math.max(wordALength, wordBLength);
  const avgLength = (wordALength + wordBLength) / 2;

  const distance = levenshtein(wordA, wordB);
  const normalized = distance / maxLength;

  const score = (1 - normalized) ** (1 + 3 / avgLength);

  return Math.max(0, Math.min(1, score));
}
