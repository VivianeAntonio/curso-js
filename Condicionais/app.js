/* Condicionais
if
else
elseif
switch
*/

let pais = "brasil"
let estado = "sp"


if (pais == "irlanda"){
    console.log("Sou brasileiro")
} else if(estado == "sp") {
    console.log("Sou paulista")
} 
else {
    console.log("Sou gringo")
}


switch(pais){
    case 'brasil' :
        console.log("Sim, Brasil")
        break
    case 'canada' :
        console.log("Opa, Canadá")
        break
    default:
        console.log("Nenhum país encontrado")
        break
}