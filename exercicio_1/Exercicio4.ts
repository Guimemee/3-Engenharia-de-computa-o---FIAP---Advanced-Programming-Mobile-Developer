/**
 * Exercício 4: Encapsulamento, Sobrescrita de Métodos e Polimorfismo
 */

export class ContaBancaria {
  constructor(
    public titular: string,
    public saldo: number
  ) {}

  exibirSaldo(): string {
    return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
  }
}

export class ContaCorrente extends ContaBancaria {
  constructor(
    titular: string,
    saldo: number,
    public limiteCredito: number
  ) {
    super(titular, saldo);
  }

  override exibirSaldo(): string {
    const saldoTotal = this.saldo + this.limiteCredito;
    return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
  }
}

// Demonstração
const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
console.log(contaCorrenteExemplo.exibirSaldo());