/**
 * Exercício 2: Interseção de Tipos (Intersection Types)
 */

export type Pessoa = {
  nome: string;
  idade: number;
};

export type Empregado = {
  empresa: string;
  salario: number;
};

export type PessoaEmpregada = Pessoa & Empregado;

export function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
  return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}

// Demonstração
const pessoaEmpregadaExemplo: PessoaEmpregada = {
  nome: 'Ana',
  idade: 35,
  empresa: 'TechCorp',
  salario: 8000
};

console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));