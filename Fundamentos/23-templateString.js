//Template String

const nome = 'Rebeca'
const concatenacao = ('Olá ' + nome + '!')


//Template respeita quebras de linha espaços e etc...
const template = (`
    Olá
    ${nome}!
`)

console.log(concatenacao, template)

//Muito usado para variaveis ${ variavel }
//Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = (texto) => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)