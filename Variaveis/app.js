// Variáveis
// escopo global, escopo local
// var (escopo global), let (dentro do bloco), const (valor fixo)
// case sensitive (camelCase)
// iniciar o nome de variável sempre com uma letra


// var - escopo global
var nome = "Viviane"
if (true) {
    nome = "Kelly"
}

// let - escopo local
if (true) {
    let nome2 = "Sabrina"
}

// const - escopo local
if (true) {
    const a = {nome3: "Igor"}
    a.nome3 = "José"
}
// Obs: atributos da const podem ser modificados