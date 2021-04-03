const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Não existe (undefined)

valores[4] = 10
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log('\n'+valores.length)

console.log(valores.pop()) //Retira o ultimo elemento do array

//Deleta o valor do array de acordo com o índice
delete valores[0]

console.log(valores)

console.log(typeof valores) // array é um objeto em JS