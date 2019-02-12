const meuArray = []

for (var i = 0; i < 10; i++ ) {
    meuArray.push(function(){
        console.log(i)
    })
}

// qual o valor do indice na posição 2?
meuArray[2]()
// valor é 10 porque é o último valor que i assumiu antes de sair do bloco

// qual o valor do indice na posição 8?
meuArray[8]()
// valor é 10 porque é o último valor que i assumiu antes de sair do bloco

