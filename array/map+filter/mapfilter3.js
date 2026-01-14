const usuarios = [
  { nome: "Rafael", idade: 28, ativo: true },
  { nome: "Mariana", idade: 17, ativo: true },
  { nome: "João", idade: 22, ativo: false },
  { nome: "Ana", idade: 19, ativo: true }
];

const activeUsers = usuarios
.filter((user) => user.ativo )
.filter((user) => user.idade >= 18)
.map((user) => user.nome.toUpperCase())

console.log(activeUsers)
