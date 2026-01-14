function buscarDadosApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Sucesso!")
            } else {
                reject(new Error("Erro de rede"))
            }

        }, 2000)
    })
}

async function conexaoApi() {

    try {

        const sucesso = await buscarDadosApi();

        console.log(sucesso)

    } catch (e) {

        console.log(e.message)

    } finally {
        console.log("Requisição finalizada")
    }
}

conexaoApi();