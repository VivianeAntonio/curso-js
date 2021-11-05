console.log(
    document.body.childNodes
)

var lista = document.body.childNodes
alert(lista.length)
alert(lista[5].innerHTML)
alert(lista[5].nodeName)
alert(lista[1].nodeType)
alert(lista[1].nodeValue)
alert(lista[5].childNodes[3].childNodes[0].nodeValue)