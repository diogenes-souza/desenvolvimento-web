// Operadores Unários

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //Primeiro compara, depois decrementa - Por isso que da true
console.log(num1 === num2) // Como já decrementou, ele da false.