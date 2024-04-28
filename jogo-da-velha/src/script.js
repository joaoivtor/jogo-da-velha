const btns = document.querySelectorAll(".btn");
const play = document.querySelector(".play");
const textoDeResultado = document.querySelector(".resultado")
const telaDeFundo = document.querySelector(".tela");
const placar = document.querySelector(".placar")

const simbolos = ["X", "O"];
let contSimbolo = 0;
let pontuacao = [0, 0];

function resetaJogo() {

    telaDeFundo.classList.add("desativado");
    textoDeResultado.classList.add("desativado");
    btns.forEach((element) => {
        element.value = "";

    })
}

function começaJogo() {
    play.classList.add("desativado");
    telaDeFundo.classList.add("desativado");

}

function resultado(result) {

    // 1 = ganhou
    // 0 = empatou
    //-1 = perdeu se algum dia eu resolver add um bot
    if (result == 1) {
        placar.children[contSimbolo].innerHTML = simbolos[contSimbolo] + ": " + (pontuacao[contSimbolo] += 1);
        resetaJogo()
        
    }

    if (result == 0) {
        telaDeFundo.classList.remove("desativado");
        textoDeResultado.classList.remove("desativado");
        textoDeResultado.innerHTML = "Empatou!";
        
    }

}

function regrasJogo() {
    //linhas

    //1 linha
    if (btns[0].value == simbolos[contSimbolo] && btns[1].value == simbolos[contSimbolo]
        && btns[2].value == simbolos[contSimbolo]) { 
        resultado(1)
    }
    //2 linha
    if (btns[3].value == simbolos[contSimbolo] && btns[4].value == simbolos[contSimbolo]
        && btns[5].value == simbolos[contSimbolo]) {     
        resultado(1)
    }
    //3 linha
    if (btns[6].value == simbolos[contSimbolo] && btns[7].value == simbolos[contSimbolo]
        && btns[8].value == simbolos[contSimbolo]) {
        resultado(1)
    }

    //colunas

    //1 coluna
    if (btns[0].value == simbolos[contSimbolo] && btns[3].value == simbolos[contSimbolo]
        && btns[6].value == simbolos[contSimbolo]) {
        resultado(1)
    }
    //2 coluna
    if (btns[1].value == simbolos[contSimbolo] && btns[4].value == simbolos[contSimbolo]
        && btns[7].value == simbolos[contSimbolo]) {
        resultado(1)
    }
    //3 coluna
    if (btns[2].value == simbolos[contSimbolo] && btns[5].value == simbolos[contSimbolo]
        && btns[8].value == simbolos[contSimbolo]) {
        resultado(1)
    }

    //diagonais

    //1 diagonal
    if (btns[0].value == simbolos[contSimbolo] && btns[4].value == simbolos[contSimbolo]
        && btns[8].value == simbolos[contSimbolo]) {
        resultado(1)
    }
    //2 diagonal
    if (btns[2].value == simbolos[contSimbolo] && btns[4].value == simbolos[contSimbolo]
        && btns[6].value == simbolos[contSimbolo]) {
        resultado(1)
    }

    //empate
    if (btns[0].value != "" && btns[1].value != "" && btns[2].value != "" &&
        btns[3].value != "" && btns[4].value != "" && btns[5].value != "" &&
        btns[6].value != "" && btns[7].value != "" && btns[8].value != "") {

        resultado(0)
        setTimeout(resetaJogo, 800)
    }
}

// é onde adiciona o evento a cada botão e a função que será repetida toda vez que clicar em um botão
btns.forEach((element) => {
    element.addEventListener("click", function () {

        if(element.value == ""){
            element.value = simbolos[contSimbolo]
            regrasJogo();
            //muda simbolo X > O
            contSimbolo++;
            if (contSimbolo > 1) {
                contSimbolo = 0
            }
        }
    })
});