/* Operadores Aritméticos:
 + soma
- subtração
* multiplicação
/ divisão
** exponenciação
% modulo resto da divisão
*/

let x = 10
let y = 5
let resultado = x-y
console.log(resultado)

// precedência
let n1 = 8
let n2 = 7
let n3 = 6
let media = (n1+n2+n3)/3
console.log(media)

// Operadores de Atribuição
let a = 5
let b = 2
a +=b
console.log(a)
//   a = a+b   também pode ser escrito como:   a += b
//   a = a-b   também pode ser escrito como:   a -= b
//   a = a*b   também pode ser escrito como:   a *= b
//   a = a/b   também pode ser escrito como:   a /= b
//   a = a**b   também pode ser escrito como:   a **= b
//   a = a%b   também pode ser escrito como:   a %= b


// Incremento e decremento
r = 6
console.log(r)
r++
console.log(r)
r--
console.log(r)

// Operadores de comparação
let p = 10
console.log(p == 10) // retorna true
console.log(p == "10") // retorna true
console.log(p === "10") // retorna false pois compara o valor e o tipo
console.log(p != 9) // retorna true pois não é igual
console.log(p != 10) // retorna false pois os valores sao iguais
console.log(p != "10") // retorna false pois os valores sao iguais independento do tipo
console.log(p !== "10") // retorna true pois o valor e tipo sao diferentes
console.log(p < 15) // retorna true pois o numero 10 é menor que 15
console.log(p < 2) // retorna false pois o numero 10 não é menor que 2
console.log(p > 2) // retorna true por 10 é maior que 2
console.log(p <= 2) // retorna false pois 10 não é menor ou igual a 2
console.log(p >= 20) // retorna false pois 10 não é maior ou igual a 20

// Operadores Lógicos
let mediaAluno = 8
let frequencia = 80
console.log(mediaAluno >= 7 && frequencia >= 70) // retorna true pois as duas condições são verdadeiras
console.log(mediaAluno >= 7 || frequencia >= 50) // retorna true uma ou outra é verdadeira

// Operador Ternário
let idade = 16
let eleitor = (idade >= 16) ? "Pode votar" : "Não pode votar"
console.log(eleitor) // retorna "Pode votar"








