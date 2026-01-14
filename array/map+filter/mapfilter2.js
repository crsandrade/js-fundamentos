const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 },
  { nome: "Mousepad", preco: 40 }
];

const newProducts = produtos
    .filter((produto) => produto.preco > 100)
    .map((produto) => {
        return {
            nome: produto.nome, preco: produto.preco * 0.9
        }
    })

    console.log(newProducts)
