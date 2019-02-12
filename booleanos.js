let isativo = false
console.log(isativo)
isativo = true
console.log(isativo)

isativo = 1
// colocando duas vezes a negação ele volta a ter o valor original
console.log(!!isativo)

// tudo isso em js resolve para verdadeiro
console.log("testando valores verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{}) // objeto vazio
console.log(!!Infinity)
console.log(!!isativo == true)

// tudo isso em js resolve para falso
console.log("testando valores falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!isativo == false)

console.log("para finalizar...")
console.log(!!('' || null || ' '))

let nome = 'Henrique'
console.log(nome || 'desconhecido')
console.log(!!(nome || 'desconhecido'))