// Operadores relacionais

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 1)
console.log('04)', '3' !== 1)

console.log('\n05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('\n09)', d1 == d2)
console.log('10)', d1 === d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('\n12)', undefined == null)
console.log('13)', undefined === null)