//Operador ternário, identico ao IIF - Validação+verdeiro=Aprovado || Validação+falso=Reprovado

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.5))