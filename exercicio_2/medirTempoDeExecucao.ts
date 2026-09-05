/**
 * Exercício 2.2: Decorator de Método para Medição de Desempenho
 */

export function medirTempoDeExecucao(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.time(`[Benchmark] ${propertyKey}`);
    const resultado = metodoOriginal.apply(this, args);
    console.timeEnd(`[Benchmark] ${propertyKey}`);
    return resultado;
  };

  return descriptor;
}

export class Calculadora {
  @medirTempoDeExecucao
  somarNumeros(array: number[]): number {
    return array.reduce((acumulador, valor) => acumulador + valor, 0);
  }
}

// Demonstração
const calc = new Calculadora();
const resultadoSoma = calc.somarNumeros([10, 20, 30, 40, 50, 100, 200]);
console.log(`Resultado da Soma: ${resultadoSoma}`);