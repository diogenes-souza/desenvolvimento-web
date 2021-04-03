//Estrutura de repetição do while

/*
Declaração do...while
A instrução do...while repetirá até que a condição especificada seja falsa.

do
  declaracao
while (condicao);

A instrução será executada uma vez antes da condição ser verificada. Para executar multiplas instruções utilize uma declaração de bloco ({ ... }) para agrupá-las. Caso a condicao seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condicao é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.

Exemplo
No exemplo a seguir, o laço é executado pelo menos uma vez e irá executar até que i seja menor que 5.

do {
  i += 1;
  console.log(i);
} while (i < 5);
*/

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')