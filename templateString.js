const pessoa = 'Henrique'
const concatenacao = 'Ola ' + pessoa + "!"
// template ao contrário da concatenção suporta quebra e linhas
const template = `Olá
    ${pessoa}!`
 console.log(concatenacao, template)
 
 // o que estiver dentro do $ o js vai tentar interpolar (interpretar)
 console.log(`1 + 1 = ${1+1}`)

 const up = texto => texto.toUpperCase()
 console.log(`Ei... ${up('cuidado')}!`)