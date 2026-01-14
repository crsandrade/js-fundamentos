function verificarIdade(idade) {
    return new Promise((resolve, reject) => {
        if (typeof(idade) !== "number") {
            reject("Apenas números são permitidos")
            return;
        }

        if (idade >= 18) {
            resolve("Você é maior de idade, aproveite o show.")
        } else {
            reject("Você é menor de idade, entrada não permitida")
        }
    })
}

async function portaDaBalada(idade) {
    try {
        const entradaPermitida = await verificarIdade(idade);

        console.log(entradaPermitida)
    } catch (erro) {
        console.error(erro)
    }
}

portaDaBalada('Rafael')
portaDaBalada(11)
portaDaBalada(12)
portaDaBalada(18)
portaDaBalada(15)
portaDaBalada(31)
portaDaBalada(23)
portaDaBalada(22)
portaDaBalada('Rafael')
