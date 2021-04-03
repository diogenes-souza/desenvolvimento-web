//Hoisting

console.log('a =', a)
var a = 2
console.log('a =', a)

//JS entende assim:
// var a 
// console.log('a =', a)
// a = 2
// console.log('a =', a)

console.log('b =', b)
let b = 4
console.log('b =', b)