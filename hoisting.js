/** É apenas uma curiosidade do js porém não a necessidade de utilizar esta estratégia */

// HOSTING - içamento de uma variavel para não causar erro na leitura do script
console.log('a=', a)
var a = 1
console.log('a=', a)

// seria a mesma coisa que isso aqui em baixo
var b
console.log('b=', b)
b = 2
console.log('b=', b)

// exemplo com uma função
function teste() {
    console.log('c=', c)
    var c = 3
    console.log('c=', c)
}

teste()

// com LET isso causaria um erro 
console.log('d=', d)
let d = 1
console.log('d=', d)

