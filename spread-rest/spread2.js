const usuario = { nome: "Rafael", idade: 28 };
const endereco = { cidade: "São Paulo", pais: "Brasil"}

const dados = {...usuario, ...endereco}

console.log(dados)