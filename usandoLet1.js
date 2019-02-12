/**
 * Variável do tipo VAR tem dois escopos: global e função
 * Variável do tipo LET tem três escopos: global, função e bloco
 */

/** Lembrando que uma variavel do tipo LET tem apenas escopo de bloco */
var numero = 1
// isso é um bloco {}
{
    let numero = 2
    console.log('dentro da função =', numero)
}

console.log('fora da função =', numero)

/** Neste caso o escopo de bloco tem predileção pelo escopo maior */
let teste = 4
{
    let teste = 5
    console.log('dentro da função =', teste)
}

console.log('fora da função =', teste)