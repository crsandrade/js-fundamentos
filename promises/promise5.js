function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if(numero % 2 === 0) {
            resolve("Número PAR")
        } else {
            reject("Número IMPAR")
        }
    })
}

async function mostraNumero(number) {

    try {
    const numero = await verificarNumero(number);
    console.log(numero)
    } catch (error) {
        console.error(error)
    }
}

mostraNumero(5);
mostraNumero(10);
mostraNumero(9);
mostraNumero(8);
mostraNumero(7);