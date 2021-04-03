//Testando com a variavel let

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //Respeita o que esta dentro do bloco(escopo)
}

console.log('Fora =', numero)