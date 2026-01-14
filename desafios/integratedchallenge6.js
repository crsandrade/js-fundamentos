const usuarios = [
  { id: 1, nome: "Rafael", ativo: true },
  { id: 2, nome: "Ana", ativo: false },
  { id: 3, nome: "João", ativo: true }
];


function normalizarUsuarios(usuarios) {

    const retiraId = usuarios.reduce((total, user) => {
        const userId = user.id
        const nome = user.nome
        const ativo = user.ativo
        
        if(!total[userId]) {
            total[userId] = { nome, ativo }
        }

        return total
    }, {})

    return retiraId
}


console.log(normalizarUsuarios(usuarios))