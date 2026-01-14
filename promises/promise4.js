function esperarMensagem() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("olá")
        }, 2000)
    })
}

async function mostraMensagem() {
    const mensagem = await esperarMensagem();

    console.log(mensagem)
}

mostraMensagem();