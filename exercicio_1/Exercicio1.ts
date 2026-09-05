/**
 * Exercício 1: Interfaces e Tipos de União (Union Types)
 */

export interface Produto {
  nome: string;
  preco: number;
  categoria: string;
}

export type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

export function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
  return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}

// Demonstração
const produtoExemplo: Produto = {
  nome: 'Celular',
  preco: 2000,
  categoria: 'Eletrônicos'
};

const formaPagamentoExemplo: FormaPagamento = 'cartão';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));