const pedidos = [
    { cliente: "Rafael", valor: 120 },
    { cliente: "Ana", valor: 80 },
    { cliente: "Rafael", valor: 50 },
    { cliente: "João", valor: 200 }
];


function relatorioPedidos(pedidos) {

    const relatorio = pedidos.reduce((clientes, pedido) => {
        const nome = pedido.cliente;
        const valor = pedido.valor;

        if(!clientes[nome]) {
            clientes[nome] = valor;
        } else {
            clientes[nome] += valor;
        }

        return clientes
    }, {})

    return relatorio;
}

console.log(relatorioPedidos(pedidos))