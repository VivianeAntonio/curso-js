/* Comandos BOM (Browser Object Model) */

window.alert("Olá mundo")
window.console.log(
    window.document.getElementById("titulo").innerHTML    
)

console.log(window)

console.log(screen)
console.log(screen.width)
console.log(screen.height)
console.log(screen.orientation)
console.log(screen.orientation.type)

console.log(navigator)
console.log(navigator.language)

console.log(location)
console.log(location.href)
/*location.href = "https://www.google.com" redireciona para outra pagina*/

console.log(history)
function voltar(){
    history.back()
}
function adiantar(){
    history.forward()
}


