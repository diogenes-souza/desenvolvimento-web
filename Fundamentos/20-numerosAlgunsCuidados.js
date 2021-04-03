console.log(7 / 0) //Nõ gera erro, gera infinito
console.log("10" / 2) //Se o JS  nao entender como number ele gera um NaN
console.log("3" + 2) //Concatena (A string é mais Forte)
console.log("3" - 2) //Subtrai
console.log("Show!" * 2) //Gera um NaN
console.log(0.1 + 0.7) //Gera uma imprecisão

//Gera erro
//console.log(10.toString())

//Funciona normalmente
console.log((10.345).toFixed(2))