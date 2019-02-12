let valor // não inicializada
console.log(valor)

valor = null // ausência de valor (não aponta para nenhum local na memória)
console.log(valor)
// console.log(valor.toString()) --> erro!

const produto = {}
console.log(produto.nome)
console.log(produto)

produto.nome = 3.50
console.log(produto)

produto.preco = undefined // evite atriburir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)