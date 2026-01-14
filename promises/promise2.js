const user = { id: 1, nome: "Rafael" } 
const pedidos = ["Pedido 1", "Pedido 2", "Pedido 3"] 
function buscarUsuario(user) {
     return new Promise((resolve, reject) => {
         if (user) {
             resolve(user) 
            } else {
                 reject('SYSTEM ERROR') 
                } 
            })};

function buscarPedidos(usuarioId) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (usuarioId === 2) {
                 resolve(pedidos) 
                } else {
                     reject('Usuário não encontrado') 
                    }}, 5000)})} 
                    
buscarUsuario(user)
.then(usuario => {
     return buscarPedidos(usuario.id); 
    })
    .then(pedidos => {
         console.log(pedidos); 
        })
        .catch(erro => {
             console.error(erro); 
            });