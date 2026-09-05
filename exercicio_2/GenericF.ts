/**
 * Exercício 2.1: Função Genérica com Restrição de Tipos (Generic Constraints)
 */

export function encontrarMaiorElemento<T extends number | string>(array: T[]): T {
  if (array.length === 0) {
    throw new Error('O array não pode estar vazio.');
  }

  let maior = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  return maior;
}

// Demonstração
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);

console.log(`Maior número: ${maiorNumero}`);
console.log(`Maior palavra (ordem lexicográfica): ${maiorPalavra}`);