// Objeto
/* Um objeto é uma coleção de propriedades, e uma
propriedade é uma associação entre um nome (ou chave)
e um valor. Um valor de propriedade pode ser uma função,
que é então considerada um método do objeto. */

let pessoa = {
    nome: 'Rodrigo',
    idade: 35,
    feliz: true,
    pets: ['cachorro', 'gato'],
    carros: {
        camaro: {
            placa: "123456",
            cor: "amarelo"
        },
        uno: {
            placa: "987456",
            cor: "vermelho"
        }
    },
    andar: function(km){
        alert(pessoa.nome+" andou "+km+" km")
    }    
}
    
pessoa.nome = 'Juliana'

pessoa.andar(20)

console.log(pessoa.pets[1])
console.log(pessoa.carros.camaro.cor)