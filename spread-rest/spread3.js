const produto = {
    nome: "Teclado", preco: 100, estoque: 20
};


const newProduct = {
    ...produto, preco: 90
}

console.log(produto)
console.log(newProduct)