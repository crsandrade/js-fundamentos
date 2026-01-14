const vendas = [
  { produto: "Teclado", categoria: "Perifericos", valor: 100 },
  { produto: "Mouse", categoria: "Perifericos", valor: 50 },
  { produto: "Monitor", categoria: "Tela", valor: 900 },
  { produto: "Headset", categoria: "Perifericos", valor: 150 },
  { produto: "Notebook", categoria: "Computador", valor: 3000 }
]


function relatorioVendas(vendas) {

    const chaves = vendas.reduce((total, venda) => {

        const category = venda.categoria;
        const preco = venda.valor;

        if(!total[category]) {
            total[category] = preco;
        } else {
            total[category] += preco;
        }
            
        return total 
    } , {})

    return chaves
}

console.log(relatorioVendas(vendas))