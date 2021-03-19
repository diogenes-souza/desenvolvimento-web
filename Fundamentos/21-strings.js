//Strings são delimitadas por aspas duplas (""), simples('') ou crase (``), usa-se crases como template strings

const escola = 'Cod3r'

console.log(escola.charAt(3)) //3
console.log(escola.charAt(4)) //r
console.log(escola.charAt(5)) //Se não encontrar não traz um erro
console.log(escola.charCodeAt(3)) //Pega o vlor da tabela ASC 

/**
 * https://unicode-table.com/pt/#thaana
 */

 console.log(escola.indexOf(3)) //Traz o índice do caracter dentro do array da string (Posição)

 console.log(escola.substring(1)) // Traz um pedaço da string
 console.log(escola.substring(3)) // Traz um pedaço da string

 console.log('Escola '.concat(escola).concat("!")) //Concatena
 console.log('Escola '+ escola +"!") //Concatena
 console.log(escola.replace(3, 'e')) //Substitui a letra da 3 posição pela letra 'e'

 console.log('Ana, Maria, Pedro'.split(',')) //Transforma em um array, setando o separador que é a vírgula.

