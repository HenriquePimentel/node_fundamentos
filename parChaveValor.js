// par nome / valor
const saudacao = 'Olá' // contexto léxico 1

/** No caso de cima como as constantes SAUDACAO
 * estão em contexto diferentes então não causa problema
 * */
function exec() {
    const saudacao = 'Dalee' // contexto léxico 2
    return saudacao
}

const Cliente = {
    nome: "Heitor",
    idade: 58,
    peso: 86,
    endereco: {
        logradouro: 'Cabral de Menezes',
        numero: 560
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)

