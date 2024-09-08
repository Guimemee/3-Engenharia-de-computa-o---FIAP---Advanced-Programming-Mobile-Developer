function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Guardamos a função original
    const metodoOriginal = descriptor.value;

    // Substituímos a função original por uma nova que mede o tempo
    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);  // Inicia a medição do tempo
        const resultado = metodoOriginal.apply(this, args);  // Executa a função original
        console.timeEnd(propertyKey);  // Finaliza a medição e exibe o tempo no console
        return resultado;
    };
    
    return descriptor;
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        // Simula uma operação que pode demorar um pouco
        return array.reduce((a, b) => a + b, 0);  // Soma todos os números do array
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);  // Exibe o tempo de execução no console