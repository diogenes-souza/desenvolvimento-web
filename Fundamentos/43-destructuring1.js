// Novo recurso do ECMA SCRIPT 2015

const pessoa = {
    nome: 'Valdcreid',
    idade: 25,
    sobreNome: 'Torrent',
    peso: 65,
    altura: 1.65,
    endereco: {
        logradouro: 'Av. Alameda dos Anjos',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {cintura, bemHumorada = true} = pessoa
console.log(cintura, bemHumorada)

const { endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)
