var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var seta_direita = window.document.getElementById("seta_direita")
var seta_esquerda = window.document.getElementById("seta_esquerda")

function RolarParaDireita() {
    Bruna.style ="display:none"
    Samantha.style ="display:flex"
    seta_direita.style = "display:none"
    seta_esquerda.style = "display:flex; margin-top: 70px; margin-left: 20px"
}

function RolarParaEsquerda() {
    Samantha.style ="display:none"
    Bruna.style ="display:flex"
    seta_direita.style = "display:flex"
    seta_esquerda.style = "display:none"
}