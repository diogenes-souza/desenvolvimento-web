//Etruturas de controle if elseif e else

/*
Múltiplas condicionais if ... else podem ser aninhados quando necessário. Observe que não existe elseif (em uma palavra). O correto é a instrução com espaços (else if), conforme abaixo:

if (condição1)
   instrução1
else if (condição2)
   instrução2
else if (condição3)
   instrução3
...
else
   instruçãoN

Para ver seu funcionamento, abaixo está a instrução como deveria ser caso identada corretamente.

if (condição1)
   instrução1
else
   if (condição2)
      instrução2
   else
      if (condição3)
...

Para executar multiplas instruções dentro de uma condição, utilize um bloco ({ ... }) . Em geral, é sempre uma boa prática utilizar instruções dentro de blocos, especialmente em códigos que envolvam condicionais if aninhadas:
*/

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)