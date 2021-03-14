// Tipagem os dados

/*
O mais recente padrão ECMAScript define sete tipos de dados:

Seis tipos de dados são os chamados primitivos:
* Boolean. true e false.
* null. Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.
* undefined. Uma propriedade superior cujo valor é indefinido.
* Number. 42 ou 3.14159.
* String. "Howdy"
* Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.
e 
* Object
Embora esses tipos de dados sejam uma quantidade relativamente pequena, eles permitem realizar funções úteis em suas aplicações.  Objetos e funções são outros elementos fundamentais na linguagem. Você pode pensar em objetos como recipientes para os valores, e funções como métodos que suas aplicações podem executar.
*/

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

//Evitar nome genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto químico Perigoso... kkk
