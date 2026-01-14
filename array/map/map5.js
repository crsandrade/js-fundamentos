const produtos = [
    { nome: "Teclado", preco: 100 },
    { nome: "Mouse", preco: 50 },
    { nome: "Monitor", preco: 1000 },
]

const newProducts = produtos.map((produto) => {
    return {
        nome: produto.nome, preco: produto.preco - produto.preco * 0.1
    }
})

console.log(newProducts)