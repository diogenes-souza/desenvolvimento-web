// A variavel var dentro de um bloco ela é visível em quaquer lugar

{ 
    { 
        { 
            { 
                var sera = 'Será???' 
            } 
        } 
    } 
}
console.log(sera) //Será que vai imprimir a variavel será?

//Dentro da Função, o var será visto apenas pela a função
function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) 
