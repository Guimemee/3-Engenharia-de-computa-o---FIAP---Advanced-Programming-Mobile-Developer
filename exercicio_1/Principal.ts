/**
 * Ponto de Entrada / Demonstração Geral do Exercício 1
 */

import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

const clienteExemplo = new Cliente('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 4500);

console.log('--- Execução do Módulo Pedido / Cliente ---');
console.log(pedidoExemplo.exibirPedido());