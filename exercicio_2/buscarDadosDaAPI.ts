/**
 * Exercício 2.4: Assincronismo com Promises e Async/Await
 */

export interface RespostaAPI {
  status: 'success' | 'error';
  payload?: string;
  message?: string;
}

export async function buscarDadosDaAPI(): Promise<RespostaAPI> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.3; // 70% de taxa de sucesso simulada
      if (sucesso) {
        resolve({
          status: 'success',
          payload: 'Carga de dados sincronizada com sucesso via API REST.'
        });
      } else {
        reject(new Error('Falha de conexão com a API remota (Timeout 504).'));
      }
    }, 1200);
  });
}

export async function executarBusca(): Promise<void> {
  console.log('[API] Iniciando requisição assíncrona...');
  try {
    const resposta = await buscarDadosDaAPI();
    console.log(`[API SUCESSO] ${resposta.payload}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[API ERRO] ${error.message}`);
    } else {
      console.error('[API ERRO DESCONHECIDO]', error);
    }
  }
}

// Execução
executarBusca();