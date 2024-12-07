function jogar(){
    let suaEscolha= document.getElementById("digite").value;
    let moedaValor;

    suaEscolha = suaEscolha.toLowerCase()
    let selecao;
    if(suaEscolha=="coroa"){
        selecao = 0
    }

    else{
        selecao = 1
    }

    moedaValor = Math.ceil(Math.random() * 100);

    if(moedaValor % 2 == 0){
        moedaValor = 0;
    }
    else{
        moedaValor = 1
    }

    if(moedaValor == 0){
        document.getElementById("moedaValor").innerHTML = "coroa";
    }
    else if(moedaValor == 1){
        document.getElementById("moedaValor").innerHTML = "cara";
    }


    if(moedaValor == selecao){
        document.getElementById("vitoriaDerrota").innerHTML = "Ganhou!";
    }
    else if(moedaValor != selecao){
        document.getElementById("vitoriaDerrota").innerHTML = "Perdeu!";
    }


}
    
  