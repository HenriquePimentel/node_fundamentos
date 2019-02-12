/**
 * Em js uma variavel definida com a palavra reservada
 * var pode ser visível fora de um bloco; 
 *
 * Seu escopo é diferente do java por exemplo;
 * Este caso só é inválido se for uma função;
 */

{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

/**
 * Exemplo aonde o escopo da variavel só existe dentro de uma função
 */

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)