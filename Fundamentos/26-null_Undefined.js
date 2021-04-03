//Null e Undefined

let valor //não inicializado
console.log(valor)
//console.log(valor2) valor2 não foi declarado.

valor = null //ausência de valor
console.log(valor)

//console.log(valor.toString()) Apresentará erro, pois não se poe usar o toString para nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço

console.log(!!produto.preco)
console.log(produto)

