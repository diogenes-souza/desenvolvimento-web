// Par Nome/Valor
const saudacao = 'Aobaa!!!' // contexto léxico 1


function exec() {
    const saudacao = 'Salveeee!' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Av. Alameda dos Anjos',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

