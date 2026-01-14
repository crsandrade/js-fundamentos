const user = {
     id: 1, nome: "Rafael" 
    } 
function buscarUsuario(user) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (user) {
                 resolve(user) 
                } else {
                     reject('SYSTEM ERROR') 
                    }}, 5000)})}
buscarUsuario(user) 
.then(msg => console.log(msg)) 
.catch(erro => console.error(erro));