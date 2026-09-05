/**
 * Demonstração do Namespace Financeiro
 */

import { Financeiro } from './Financeiro';

const orcamentoExemplo = new Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(5000, 0.15);
console.log(`Valor com Imposto (15%): R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(5000, 0.10);
console.log(`Valor com Desconto (10%): R$${valorComDesconto.toFixed(2)}`);