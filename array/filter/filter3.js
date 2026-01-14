const produtos = [
    {id: 1, nome: "Teclado", preco: 120 }, 
    {id: 2, nome: "Mouse", preco: 80 }, 
    {id: 3, nome: "Monitor", preco: 900 }, 
    {id: 4, nome: "Mousepad", preco: 40 }, 
];


const newProducts = produtos.filter((produto) => produto.preco > 100)

console.log(newProducts)