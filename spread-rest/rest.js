const somar = (...numeros) => numeros.reduce((acc, valorAtual) => acc + valorAtual, 0)


console.log(somar(1, 2, 3, 4))