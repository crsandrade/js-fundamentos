const users = [
    {id: 1, nome: "Rafael", ativo: true},
    {id: 2, nome: "Mariana", ativo: false},
    {id: 3, nome: "João", ativo: true},
    {id: 4, nome: "Ana", ativo: false},
    
]

const newUsers = users.filter((user) => user.ativo )

console.log(newUsers)