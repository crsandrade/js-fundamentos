const usuarios = [
    { nome: "Rafael", ativo: true },
    { nome: "Ana", ativo: false },
    { nome: "Carlos", ativo: true },
]

const wellcomeUsers = usuarios.map((user) => {
    if (user.ativo) {
        return `Bem-vindo ${user.nome}`
    } else {
        return `Usuário Inativo`
    }
})

console.log(wellcomeUsers)