const carrinho = [
    { produto: "Camisa", qtd: 2, preco: 50 },
    { produto: "Calça", qtd: 1, preco: 120 },
];

function adicionarProduto(carrinho, novoProduto) {

    let encontrado = false;

    const novoCarrinho = carrinho.map(item => {
        if(item.produto === novoProduto.produto) {
            encontrado = true;
            return {
                ...item, qtd: item.qtd + novoProduto.qtd
            }
        }

        return item;
    })

    if (!encontrado) {
        return [...novoCarrinho, novoProduto]
    }

    return novoCarrinho;
}

console.log(adicionarProduto(carrinho, {produto: "Tenis", qtd: 3, preco: 50 }))