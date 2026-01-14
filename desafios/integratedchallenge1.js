const usuarios = [
  { nome: "Ana", idade: 17, ativo: true, compras: [30, 50] },
  { nome: "Carlos", idade: 22, ativo: false, compras: [100] },
  { nome: "Beatriz", idade: 19, ativo: true, compras: [] },
  { nome: "João", idade: 30, ativo: true, compras: [20, 20, 10] }
];


function gerarRelatorio(usuarios) {


    // Itera o array de objetos pra descobrir quantos usuários ativos existem
    let activeUsers = 0;

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].ativo){
            activeUsers++;
        }   
    }
    
    const nomesAtivosAdultos = usuarios
    .filter((user) => user.ativo && user.idade >= 18)
    .map((user) => user.nome)

    const gastosPorUsuario = usuarios
        .filter((user) => user.ativo)
        .map(user => {
        const totalCompras = user.compras.reduce((soma, valor) => soma + valor, 0)

        return {
            nome: user.nome,
            total: totalCompras
        }
    })

    const totalArrecadado = usuarios
    .filter((user) => user.ativo)
    .reduce((total, user) => { 
            const somaCompras = user.compras.reduce(
                (soma, valor) => soma + (valor || 0),
                 0)
                 return total + somaCompras;
        }, 0)

    


    return {
        ativos: activeUsers,
        nomesAtivosAdultos: nomesAtivosAdultos,
        gastosPorUsuario: gastosPorUsuario,
        totalArrecadado: totalArrecadado,
    }
}

console.log(gerarRelatorio(usuarios))