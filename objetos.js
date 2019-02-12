const prod1 = {} // objeto
const prod11 = [] // array

/** 
 * Objeto em js é uma coleção de chave e valor! 
 * Ou seja você tem o nome de um atributo que no caso é nome e um valor que 
 * no caso é 'celular motorola'
 * 
 */ 
prod1.nome = 'Celular Motorola'
prod1.preco = 890.0
// da para criar atributos desta forma também 
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prod1)

/** 
 * Objeto js e json não são a mesma coisa!
 * Json é um formato textual chave valor aonde tudo são strings
 * Objeto js é um composto de chave e valor como nos exemplos à seguir
 * 
 */

 // isso aqui é um objeto js
const prod2 = {
    nome: "Camisa",
    preco: "50.00",
    tecido: {
        composicao: "Algodão",
        tecido: {
            composicao: "Poliamida"
        }
    }
}   
console.log(prod2)

// isso aqui é um json
'{ "nome": "Camisa", "preco": 50.00}'


