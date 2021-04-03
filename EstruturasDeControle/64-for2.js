//Estrutura de repetição for in...

/*
Declaração for...in
A declaração for...in executa iterações a partir de uma variável específica, percorrendo todas as propriedades de um objeto.
Para cada propriedade distinta, o JavaScript executará uma iteração. Segue a sintaxe:

for (variavel in objeto) {
  declaracoes
}

Exemplo
A função a seguir recebe em seu argumento um objeto e o nome deste objeto. Então executará uma iteração para cada elemento e retornará uma lista de string, que irá conter o nome da propriedade e seu valor.

function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

Para um objeto chamado car com propriedades make e model, o resultado será:

car.make = Ford
car.model = Mustang
*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}