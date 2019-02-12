// Armazenando uma função em uma varivável
const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma varivável
// forma mais reduzida de escrever
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,4))

// retorno implícito de uma função arrow
/**
 * Caso melhor de usar o retorno implícito é quando possui apenas uma unica linha
 * @param {*} a 
 * @param {*} b 
 */
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Exemplo de como diminuir ainda mais uma arrow function
const exemplo = a => console.log(a)
exemplo("Massa!")