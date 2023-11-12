function HelloWorld(){
    alert("Hello World !");
}

function porcentagem(valorUm, baseUm, valorDois, baseDois){
    let calculoUm = (valorUm / baseUm) * 100;
    let calculoDois = (valorDois / baseDois) * 100;

    return {resultadoUm: calculoUm, resultadoDois: calculoDois};
}


function somarTodosOsItensDoArray(arrayASerSomado){
    let somaDosItens = 0;
    for (const i of arrayASerSomado) {
        somaDosItens += i
    }
}