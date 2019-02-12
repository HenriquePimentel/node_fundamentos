const escola = "Coder"
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(4))
console.log(escola.indexOf('o'))
console.log(escola.substring(0,2))

// tem o mesmo efeito de concatenar no js ambos os casos
console.log('Minha '.concat(escola).concat("!"))
// porém este cria um log unificando a string
console.log('Mnha' + escola + '!')

console.log(escola.replace("e", "3"))
console.log('Heitor,Kátya,Lucas,Henrique,Felipe'.split(","))