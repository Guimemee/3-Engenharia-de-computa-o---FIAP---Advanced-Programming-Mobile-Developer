/**
 * Exercício 2.3: Tratamento de Erros Customizados em TypeScript
 */

export class EmailInvalidoError extends Error {
  constructor(message: string = 'Endereço de e-mail inválido: deve conter o caractere @.') {
    super(message);
    this.name = 'EmailInvalidoError';
    Object.setPrototypeOf(this, EmailInvalidoError.prototype);
  }
}

export function verificarEmail(email: string): boolean {
  if (!email.includes('@')) {
    throw new EmailInvalidoError(`O e-mail '${email}' não possui o formato esperado.`);
  }
  return true;
}

// Demonstração
function testarValidacao(email: string): void {
  try {
    verificarEmail(email);
    console.log(`[SUCESSO] O e-mail '${email}' é válido.`);
  } catch (error) {
    if (error instanceof EmailInvalidoError) {
      console.error(`[ERRO CUSTOMIZADO] ${error.name}: ${error.message}`);
    } else {
      console.error(`[ERRO INESPERADO]`, error);
    }
  }
}

testarValidacao('usuario@empresa.com.br');
testarValidacao('usuario.empresa.com.br');