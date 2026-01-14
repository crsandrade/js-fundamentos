function executarComTimeout(promise, tempoMaximo) {
    const timeout = new Promise ((_, reject) => {
        setTimeout(() => {
            reject("Tempo limite excedido")
        }, tempoMaximo)
    })
    return Promise.race([promise, timeout]);
}

const tarefa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Tarefa concluída")
    }, 6000);
});


executarComTimeout(tarefa, 3000)
.then(console.log)
.catch(console.error)