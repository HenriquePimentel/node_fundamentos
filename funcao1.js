// função sem retorno 
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)
// js permite que passe apenas um parametro, e o outro é tratado como not a number
imprimirSoma(2) 
// js permite que passe mais dos que os parametros necessários, porém são ignorados
imprimirSoma(2, 12, 4, 5, 6) 
// js permite que não passe nenhum parametro e o tratamento é not a number
imprimirSoma()

// função com retorno
function soma(a, b = 0) { // js desde 2015 permite atribuir valor padrão no parametro
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) 