
function alterarQtd(produto, acao){
    const valor = document.getElementById("valor_" + produto)
    const qtd = document.getElementById("qtd_" + produto)
    const total = document.getElementById("total_" + produto)
    
    if(acao == '-' && qtd.innerHTML <= 0){
        alert("quantidade menor que o permitido")
    }else{
    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
    const valorTotal= qtd.innerHTML * somenteNumeros(valor.innerHTML)
    total.innerHTML = formatarValor(valorTotal)
    soma()
    }
}

function soma (){
    let soma = 0
    for(let i = 1; i < 4; i++){
        let numeros = somenteNumeros(document.getElementById("total_"+ i).innerHTML)
        soma += Number(numeros)
    }
    document.getElementById("totalsub").innerHTML = formatarValor(soma)
}

function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return 'R$' + n.toLocaleString('pt-BR')
}

