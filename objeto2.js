console.log(typeof Object)
// traçando um paralelo com java seria o mesmo que chamar o construtor
// da para omitir os parenteses no new Object que funciona igual
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

// classe em js internamente também é uma função
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)