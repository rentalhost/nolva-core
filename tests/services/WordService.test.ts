import { describe, expect, it } from "vitest";

import {
  normalizeWord,
  removeDiacritics,
  similarity,
  slugify,
  slugifyId,
} from "@/services/WordService";

describe("services/WordService", () => {
  const removeDiacriticsTests = [
    ["Ação", "Acao"],
    ["café", "cafe"],
    ["lápis", "lapis"],
    ["fácil", "facil"],
    ["último", "ultimo"],
    ["árvore", "arvore"],
    ["pêssego", "pessego"],
    ["pôr", "por"],
    ["irmã", "irma"],
    ["cabeça", "cabeca"],
    ["às", "as"],
  ] as const;

  it.each(removeDiacriticsTests)(
    "removeDiacritics(%j) = %j",
    (test, expected) => {
      expect(removeDiacritics(test)).toStrictEqual(expected);
    },
  );

  const slugifyTests = [
    ["Ação", "acao"],
    ["café", "cafe"],
    ["lápis", "lapis"],
    ["fácil", "facil"],
    ["último", "ultimo"],
    ["árvore", "arvore"],
    ["pêssego", "pessego"],
    ["pôr", "por"],
    ["irmã", "irma"],
    ["cabeça", "cabeca"],
    ["às", "as"],
    ["ação de teste", "acao-de-teste"],
    ["pôr-do-sol", "por-do-sol"],
    ["a--b--c", "a-b-c"],
    ["a,-b,-c", "a-b-c"],
    ["-2025-", "2025"],
  ] as const;

  it.each(slugifyTests)("slugify(%j) = %j", (test, expected) => {
    expect(slugify(test)).toStrictEqual(expected);
  });

  it.each(slugifyTests)('slugifyId(%j) = "123-%s"', (test, expected) => {
    expect(slugifyId(123, test)).toBe(`123-${expected}`);
  });

  const normalizeWordTests = [
    ["Ação", "asao"],
    ["café", "kafe"],
    ["lápis", "lapi"],
    ["fácil", "fasiu"],
    ["último", "utimo"],
    ["árvore", "avore"],
    ["pêssego", "pesego"],
    ["pôr", "po"],
    ["irmã", "ima"],
    ["cabeça", "kabeka"],
    ["às", "a"],
    // ch
    ["chave", "save"],
    ["chorar", "sora"],
    ["chuva", "suva"],
    ["chico", "siko"],
    ["achatar", "asata"],
    // qu
    ["quanto", "kamto"],
    ["queijo", "kejo"],
    ["quociente", "kosiemte"],
    ["aquarela", "akarela"],
    // gu
    ["guerra", "gera"],
    ["guilherme", "gileme"],
    ["guapo", "gapo"],
    ["águia", "agia"],
    ["gueto", "geto"],
    // ph
    ["photo", "foto"],
    ["Pharma", "fama"],
    ["elephant", "elefamt"],
    ["phase", "fase"],
    ["microphone", "mikrofone"],
    // th
    ["Thomas", "toma"],
    ["theatro", "teatro"],
    ["method", "metod"],
    // sc, xc
    ["science", "ssiemse"],
    ["excesso", "eseso"],
    ["scena", "ssena"],
    ["texto", "testo"],
    // ce ci
    ["cidade", "sidade"],
    ["cena", "sena"],
    ["cinto", "simto"],
    ["receber", "resebe"],
    ["círculo", "sikulo"],
    // ca co cu
    ["casa", "kasa"],
    ["coco", "koko"],
    ["cultura", "kutura"],
    ["cacique", "kasike"],
    ["curto", "kuto"],
    // j
    ["janela", "janela"],
    ["jogo", "jogo"],
    ["Jesus", "jesu"],
    ["ajuda", "ajuda"],
    ["objetivo", "obijetivo"],
    // z
    ["mesa", "mesa"],
    ["asno", "asno"],
    ["resumo", "resumo"],
    ["caso", "kaso"],
    // x
    ["xarope", "sarope"],
    ["extra", "estra"],
    ["taxi", "tasi"],
    ["fox", "fos"],
    // w
    ["web", "uebi"],
    ["whisky", "uiski"],
    ["wander", "uamde"],
    ["power", "poue"],
    ["window", "uimdou"],
    // y
    ["byte", "bite"],
    ["yoga", "ioga"],
    ["stylo", "stilo"],
    ["playlist", "plailist"],
    ["system", "sistem"],
    // n + consonant
    ["encomenda", "emkomemda"],
    ["input", "imput"],
    ["enviar", "emvia"],
    ["anexo", "aneso"],
    ["incluir", "imklui"],
    // l$
    ["animal", "animau"],
    ["hotel", "oteu"],
    ["papel", "papeu"],
    ["legal", "legau"],
    ["canal", "kanau"],
    // s$
    ["nariz", "naris"],
    ["feliz", "felis"],
    ["voz", "vos"],
    ["luz", "lus"],
    // h
    ["hora", "ora"],
    ["habilidade", "abilidade"],
    ["história", "istoria"],
    ["rhapsody", "rapisodi"],
    // duplicated
    ["carro", "karo"],
    ["passo", "paso"],
    ["arroz", "aros"],
    // br<vowel><vowel>
    ["equilíbrio", "ekilibro"],
    // <consonant>$
    ["elefant", "elefamt"],
    ["inteligent", "imteligemt"],
    ["market", "maket"],
    ["student", "studemt"],
    // Extras
    ["maçã", "maka"],
    ["elétron", "eletrom"],
    ["químico", "kimiko"],
    ["órgão", "ogao"],
    ["coração", "korasao"],
    ["caráter", "karate"],
    ["histórico", "istoriko"],
    ["paralelepípedo", "paralelepipedo"],
    ["enjôo", "emjo"],
    ["baú", "bau"],
    ["juízo", "juiso"],
    ["ideia", "idea"],
    ["xícara", "sikara"],
    ["chácara", "sakara"],
    ["linguiça", "limgika"],
    ["guincho", "gimso"],
    ["tranquilo", "tramkilo"],
    ["exceção", "esesao"],
    ["região", "regiao"],
    ["tórax", "toras"],
    ["urgência", "ugemsia"],
    ["mnêmônico", "minemoniko"],
    ["psicologia", "pisikologia"],
    ["pneu", "pineu"],
    ["psicótico", "pisikotiko"],
    ["gnóstico", "ginostiko"],
    ["rissol", "risou"],
    ["carro", "karo"],
    ["maracujá", "marakuja"],
    ["bebê", "bebe"],
    ["cônsul", "komsuu"],
    ["abdômen", "abidomem"],
    ["álbum", "aubum"],
    ["hipopótamo", "ipopotamo"],
    ["pinguim", "pimgim"],
    ["avião", "aviao"],
    ["convívio", "komvivio"],
    ["filé", "file"],
    ["jabuti", "jabute"],
  ] as const;

  it.each(normalizeWordTests)("normalizeWord(%j) = %j", (test, expected) => {
    expect(normalizeWord(test)).toStrictEqual(expected);
  });

  const similarityTests = [
    ["vacina", "vassinas", "1.00"],
    ["vacina", "vaca", "0.33"],
    ["ibuprofeno", "ibuprofena", "0.87"],
    ["ibuprofeno", "isoprofeno", "0.75"],
    ["dipirona", "dipiruna", "0.83"],
    ["paracetamol", "paracetamo", "0.88"],
    ["paracetamol", "parametalol", "0.77"],
    ["cloroquina", "kloroquina", "1.00"],
    ["azitromicina", "azytromissina", "1.00"],
    ["anestesia", "anastesia", "0.85"],
    ["placebo", "plasebo", "1.00"],
    ["placebo", "pancebo", "0.62"],
    ["penicilina", "peniscilina", "0.88"],
    ["penicilina", "penicila", "0.74"],
    ["seringa", "serringa", "1.00"],
    ["seringa", "seria", "0.60"],
    ["antibiótico", "antibitic", "0.77"],
    ["amoxicilina", "amoxilina", "0.77"],
    ["farmácia", "pharmacia", "1.00"],
    ["dipirona", "dypirona", "1.00"],
    ["paracetamol", "paracetomol", "0.89"],
    ["ibuprofeno", "iboprofen", "0.63"],
    ["amoxicilina", "amoxycillina", "0.90"],
    ["azitromicina", "azytromicina", "1.00"],
    ["anestesia", "anecestesia", "0.77"],
    ["omeprazol", "omeprasol", "1.00"],
    ["omeprazol", "omeprazoo", "0.85"],
    ["cloroquina", "cloruquina", "0.85"],
    ["penicilina", "penicillina", "0.88"],
    ["seringa", "seringa", "1.00"],
    ["seringa", "seriga", "0.80"],
    ["paracetamol", "paranormal", "0.45"],
    ["ibuprofeno", "isopor", "0.19"],
    ["dipirona", "pipoca", "0.37"],
    ["cloroquina", "clorex", "0.32"],
    ["omeprazol", "omelete", "0.22"],
    ["azitromicina", "azulejo", "0.09"],
    ["amoxicilina", "moxila", "0.44"],
    ["penicilina", "penico", "0.28"],
    ["seringa", "serra", "0.42"],
    ["antibiótico", "antivírus", "0.35"],
    ["placebo", "pacote", "0.16"],
    ["anestesia", "ansiedade", "0.13"],
    ["farmácia", "farm", "0.26"],
    ["remédio", "remoto", "0.44"],
    ["injeção", "intenção", "0.67"],
    ["diagnóstico", "diagrama", "0.24"],
    ["tratamento", "trator", "0.38"],
    ["pílula", "piloto", "0.35"],
    ["comprimido", "comprimente", "0.56"],
    ["igual", "igual", "1.00"],
    ["", "vazio", "0.00"],
    ["xxxxx", "yyyyy", "0.00"],
  ] as const;

  it.each(similarityTests)(
    "similarity(%j, %j) = %j",
    (wordA, wordB, expected) => {
      expect(
        similarity(normalizeWord(wordA), normalizeWord(wordB)).toFixed(2),
      ).toStrictEqual(expected);
    },
  );
});
