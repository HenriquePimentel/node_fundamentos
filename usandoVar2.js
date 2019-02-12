/**
 * Variável do tipo VAR tem dois escopos: global e função
 * Variável do tipo LET tem três escopos: global, função e bloco
 */

/** Lembrando que uma variavel pode ter seu valor reescrito em função do escopo*/
var numero = 1
{
    var numero = 2
    console.log('dentro da função =', numero)
}

console.log('fora da função =', numero)