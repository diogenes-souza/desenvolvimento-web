// Função sem retorno

function imprimirSoma(a , b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //sem o segundo valor ele soma con um undefined - gera um NaN
imprimirSoma(2, 10, 12, 34, 23, 67) //Só urá somar os dois primeiros valores
imprimirSoma()

//Função com retorno
function soma(a, b=1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


