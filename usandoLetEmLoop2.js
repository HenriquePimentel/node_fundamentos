const meuArray = []

for (let i = 0; i < 10; i++ ) {
    meuArray.push(function(){
        console.log(i)
    })
}

// qual o valor do indice na posição 2?
meuArray[2]()
// valor é 2 porque naquele indice a variavel let assumiu o valor DENTRO do escopo do bloco

// qual o valor do indice na posição 8?
meuArray[8]()
// valor é 8 porque naquele indice a variavel let assumiu o valor DENTRO do escopo do bloco