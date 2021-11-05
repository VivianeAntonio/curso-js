console.log(
    document.getElementById("p1").innerHTML
)

var paragrafo = document.getElementById("p1")
paragrafo.innerHTML = "Novo conteúdo"

paragrafo.style.color = "red"
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "100px"


var imagem = document.getElementById("imagem")
imagem.src = "html5.jpg"
imagem.alt = "Teste de imagem"
imagem.width = "400"


var imagem2 = document.createElement("img")
imagem2.src = "javascript.png"



var elemento = document.createElement("p")
elemento.innerHTML = "Olá pessoal"

console.log(
    imagem2, elemento
)

