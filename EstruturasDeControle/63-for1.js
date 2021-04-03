//Estrutura de repetição for

/*
Declaração for
Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:

for ([expressaoInicial]; [[condicao]]  [incremento])
  declaracao

Quando um for é executado, ocorre o seguinte:

1. A expressão [expressao Inicial] é inicializada e, caso possível, é executada. Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe permite expressões de qualquer grau de complexidade. Podendo conter também declaração de variáveis.

2. A expressão [condicao] é avaliada. caso o resultado de [condicao] eja verdadeiro, o laço é executado. Se o valor de [condicao]  falso, então o laço terminará. Se a expressão [condicao]  omitida, a [condicao]  assumida como verdadeira.

3. A instrução é executada. Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupá-las.

4. A atualização da expressão incremento, se houver, executa, e retorna o controle para o passo 2.
*/

let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

