//Estrutura de controle IF exemplo 02

function teste(num) {
    if(num > 7) //nunca usar estruturas de controle sem {}, pois será considerada apenas a primeira validação
        console.log(num)

    console.log('final!')
}

// teste(6)
// teste(8)

function teste2(num) {
    if(num > 7); //nunca usar ';' nas estruturas de controle
    {  
        console.log(num)
    }
}

teste2(6)
teste2(8)
