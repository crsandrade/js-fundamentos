const mensagens = [
    "Cadê você?", " ",
     "Apareça",  " ",
    "Tá atrasado de novo, cara!"
]

const criarMensagem = (nome, ...mensagens) => {
    return `${nome} recebeu as mensagens: ${mensagens.join("\n")}`
}



console.log(criarMensagem("Rafael", ...mensagens))


