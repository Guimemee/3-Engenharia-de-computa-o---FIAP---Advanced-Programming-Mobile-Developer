# FIAP - 3 ano - Engenharia de computação - Advanced-Programming-Mobile-Devel
Quarto checkpoint da matéria Advanced Programming &amp; Mobile Dev
Este repositório contém a resolução de exercícios de TypeScript abordando conceitos fundamentais como interfaces, tipos avançados (união e interseção), classes, herança, módulos e namespaces.

## Estrutura do Repositório

- **Exercicio1.ts**: Demonstra o uso de interfaces e tipos de união (`Produto` e `FormaPagamento`).
- **Exercicio2.ts**: Explora a interseção de tipos (`Pessoa` e `Empregado`).
- **Exercicio3.ts**: Implementa classes e herança com as classes `Funcionario` e `Gerente`.
- **Exercicio4.ts**: Apresenta herança e sobrescrita de métodos com `ContaBancaria` e `ContaCorrente`.
- **Cliente.ts** e **Pedido.ts**: Demonstra o uso de módulos para organizar código relacionado a clientes e pedidos.
- **Financeiro.ts**: Utiliza namespaces para encapsular funcionalidades relacionadas a cálculos financeiros.

## Pasta Generics em TypeScript

## 01 - Função genérica

Explicação:
A função usa um tipo genérico <T>, que restringimos para aceitar apenas number ou string com <T extends number | string>.
O código começa verificando se o array está vazio, evitando erros no loop.
O loop for percorre o array e compara cada elemento para determinar o maior valor.
Função encontrarMaiorElemento()

Lógica de Comparação: O primeiro elemento do array é considerado o maior inicialmente. Em seguida, a função percorre o array, comparando cada elemento com o maior elemento conhecido. Se um elemento maior for encontrado, o maior é atualizado.
Para números, o maior é 30.
Para strings, o maior é determinado pela ordem lexicográfica (alfabética), sendo zebra o maior entre gato, elefante.
Comparação Lexicográfica (Ordem Alfabética)
Quando você compara strings em linguagens de programação (como em JavaScript ou TypeScript), a comparação é feita com base na ordem lexicográfica. Essa ordem é, essencialmente, a ordem alfabética, mas leva em conta os códigos numéricos associados a cada caractere (geralmente o código Unicode ou ASCII).

Veja Tabela neste [link da tabela - Tabela com os valores ASCII/Unicode dos caracteres alfabéticos](https://whimsical.com/tabela-com-os-valores-ascii-unicode-dos-caracteres-alfabeticos-6Lr438X8Hijg6qZ3TqN4rL)

Detalhes importantes sobre essa comparação:

1. Ordem dos Caracteres
   Cada caractere em uma string tem um valor numérico associado. Por exemplo:
   No Unicode/ASCII, a letra 'a' tem o valor 97, 'b' tem o valor 98, 'z' tem o valor 122, e assim por diante.
   As letras maiúsculas têm valores menores do que as letras minúsculas. Por exemplo, 'A' tem o valor 65, enquanto 'a' tem o valor 97.
2. Comparação de Strings
   Quando duas strings são comparadas, a comparação é feita caractere por caractere, da esquerda para a direita:
   Se o primeiro caractere de uma string for maior que o primeiro caractere da outra string, essa string será considerada maior.
   Se os primeiros caracteres forem iguais, a comparação segue para o próximo caractere, e assim por diante, até encontrar uma diferença ou até que todas as letras tenham sido comparadas.
3. Na Prática
   Vamos considerar as strings ['gato', 'elefante', 'zebra']:
   Comparação 'gato' vs 'elefante':
   O primeiro caractere de 'gato' é 'g' (valor 103), e o primeiro caractere de 'elefante' é 'e' (valor 101).
   Como 'g' tem um valor maior que 'e', 'gato' é considerado maior que 'elefante'.
   Comparação 'gato' vs 'zebra':
   O primeiro caractere de 'gato' é 'g' (valor 103), e o primeiro caractere de 'zebra' é 'z' (valor 122).
   Como 'z' tem um valor maior que 'g', 'zebra' é considerado maior que 'gato'.
   Comparação 'elefante' vs 'zebra':
   O primeiro caractere de 'elefante' é 'e' (valor 101), e o primeiro caractere de 'zebra' é 'z' (valor 122).
   Como 'z' tem um valor maior que 'e', 'zebra' é considerado maior que 'elefante'.
   Portanto, no array ['gato', 'elefante', 'zebra'], a string 'zebra' será considerada a "maior" porque seu primeiro caractere 'z' tem um valor maior na ordem lexicográfica do que os primeiros caracteres de 'gato' e 'elefante'.

## 02 - Medir Temperatura

O decorator medirTempoDeExecucao intercepta a execução de um método e mede o tempo que ele leva para ser executado.
console.time() inicia a medição e console.timeEnd() finaliza e imprime o tempo no console.
O método original é executado normalmente com metodoOriginal.apply(this, args).

## 03 - Verificar e-mail

Criamos um erro customizado EmailInvalidoError que herda da classe Error.
Na função verificarEmail, utilizamos o método includes() para verificar se o email contém @.
Se o email for inválido, lançamos uma instância de EmailInvalidoError.
O bloco try/catch captura o erro, e o instanceof garante que estamos lidando com o erro correto.

## 04 - Buscador de API

buscarDadosDaAPI simula uma chamada a uma API usando setTimeout e retorna uma Promise.
Dependendo de uma condição aleatória, a Promise é resolvida ou rejeitada.
executarBusca usa async/await para aguardar a resposta e trata possíveis erros com try/catch.


## Como Usar

1. Clone este repositório.
2. Instale o TypeScript globalmente, se ainda não estiver instalado: `npm install -g typescript`.
3. Compile os arquivos TypeScript utilizando o comando `tsc <nome-do-arquivo>.ts`.
4. Execute os arquivos JavaScript gerados conforme necessário.

## Requisitos

- Node.js e npm instalados.
- TypeScript instalado globalmente.

- 

## Observações

Este repositório foi criado como parte de um exercício para a disciplina de Advanced Programming Mobile Deve . O código está organizado de acordo com o enunciado do mesmo.
