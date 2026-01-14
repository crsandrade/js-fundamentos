function buscarProduto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Produto encontrado")
        }, 1000)

    })
}

function buscarCategoria() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Categoria encontrada")
        }, 2000)

    })
}

function buscarPreco() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Preço encontrado")
        }, 3000)

    })
}

Promise.all([buscarProduto(), buscarCategoria(), buscarPreco()])
.then((resultados) => console.log(resultados))
.catch((erro) => console.error(erro))