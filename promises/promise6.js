const user = { id: 1, nome: "Rafael" };
const pedidos = ["Pedido 1", "Pedido 2", "Pedido 3"];

function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>  {
            resolve(user)
        }, 1000)
    }) 
}

function buscarPedidos(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuarioId === 1) {
                resolve(pedidos)
            } else {
                reject("Usuário não encontrado.")
            }
        }, 1000)
    })
}

async function buscaUserOrder(usuarioId) {

    try {

    const usuario = await buscarUsuario();
    const pedido = await buscarPedidos(usuarioId);

    console.log(usuario, pedido)

    } catch (e) {
        console.error(e)
    }

}

buscaUserOrder(1);