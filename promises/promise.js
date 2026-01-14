function verificarIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      resolve("Acesso permitido");
      return;
    }

    reject("Acesso negado");
  });
}

verificarIdade("teste")
  .then(mensagem => console.log(mensagem))
  .catch(erro => console.error(erro));
