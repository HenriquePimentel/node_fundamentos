const valores = [7.7, 8.2, 9.1, 3.0]
console.log(valores[0], valores[2])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push(false, null, 'texto', {id: 2})
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
