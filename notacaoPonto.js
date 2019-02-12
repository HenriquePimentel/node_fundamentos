console.log(typeof console)

// ceil é um arrerndodamento para cima
console.log(Math.ceil[6.1])

const obj1 = {}
obj1.nome = 'bola'
// também é possível fazer deste modo
// obj1['nome'] = 'bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Executando...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome, obj3.nome)
obj3.exec()
