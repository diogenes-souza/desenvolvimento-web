//Tratamento de erros com try, catch e throw
function tratarErroPrintar(error) {
    // throw new console.error("O desenvoolvedor cagou aqui em...");
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        mensagem: erro.mensagem,
        date: new Date
    }
}

function imprimirNomeGritando (obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!');    
    } catch (e) {
        tratarErroPrintar(e)
    } finally {
        console.log('final!')
    }
}

const obj = {
    nome: 'Alberto'
}

imprimirNomeGritando(obj)