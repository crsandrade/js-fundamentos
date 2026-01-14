const pessoas = [
    {id: 1, nome: "Rafael", idade: 28},
    {id: 2, nome: "Mariana", idade: 25},
    {id: 3, nome: "João", idade: 30}
]

const newPeople = pessoas.map((pessoa) => pessoa.nome)

console.log(newPeople)