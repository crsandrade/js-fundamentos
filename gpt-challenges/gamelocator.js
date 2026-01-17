const Doom = {id: '11', titulo: 'Doom', genero: 'RPG'}
const Doom2 = {id: '12', titulo: 'Doom 2', genero: 'RPG'}
const Doom3 = {id: '13', titulo: 'Doom 3', genero: 'RPG'}
const reEvil4 = {id: '14', titulo: 'Resident Evil 4', genero: 'RPG'}


const locadora = {
    jogosDisponiveis: [],
    jogosAlugados: []
}

const verificaJogoExistencia = (jogo) => {
     if(locadora.jogosDisponiveis.some((j) => j.id === jogo.id) || locadora.jogosAlugados.some((j) => j.id === jogo.id)) {
        return { ok: true }
    }

    return { 
        ok: false, 
        message: `${jogo.titulo} não existe em nossa base de dados. `
    }
}

const cadastraJogo = (jogo) => {

    const { ok } = verificaJogoExistencia(jogo)

    if(ok) {
        return `${jogo.titulo} já está cadastrado em nossa base de dados.`
    } 

        locadora.jogosDisponiveis.push(jogo)
        return `${jogo.titulo} cadastrado com sucesso!`
    
}

const listaJogosDisponiveis = () => {
    return locadora.jogosDisponiveis;
}

const alugaJogo = (jogo) => {
    const { ok, message } = verificaJogoExistencia(jogo)
    if(!ok) return message

    if(locadora.jogosDisponiveis.some((j) => j.id === jogo.id)) {
        locadora.jogosDisponiveis = locadora.jogosDisponiveis.filter((j) => j.id !== jogo.id)
        locadora.jogosAlugados.push(jogo)
        return `${jogo.titulo} alugado com sucesso!`
    }

    if(locadora.jogosAlugados.some((j) => j.id === jogo.id)) {
        return `${jogo.titulo} já está alugado, consulte junto ao administrador do sistema quando estará disponível`
    }
}

const devolveJogo = (jogo) => {
    const { ok, message } = verificaJogoExistencia(jogo)
    if(!ok) return message

    if(locadora.jogosDisponiveis.some((j) => j.id === jogo.id)) {
        return 'Você não pode devolver um jogo que não está alugado.'
    }

    if(locadora.jogosAlugados.some((j) => j.id === jogo.id)) {
        locadora.jogosAlugados = locadora.jogosAlugados.filter((j) => j.id !== jogo.id) 
        locadora.jogosDisponiveis.push(jogo)
        return `Obrigado por devolver nosso ${jogo.titulo}, esperamos que tenha sido uma ótima experiência. Que tal experimentar alguma coisa nova hoje?`
    }
}

const removeJogo = (jogo) => {
    const { ok, message } = verificaJogoExistencia(jogo)
    if(!ok) return message

    if(locadora.jogosAlugados.some((j) => j.id === jogo.id)) {
        return `Jogos alugados não podem ser removidos.`
    } else {
       locadora.jogosDisponiveis = locadora.jogosDisponiveis.filter((j) => j.id !== jogo.id)
       return `${jogo.titulo} removido com sucesso!`
    }
}

console.log(cadastraJogo(Doom))
console.log(cadastraJogo(Doom))
console.log(cadastraJogo(Doom2))
console.log(cadastraJogo(Doom3))
console.log(alugaJogo(Doom3))
console.log(alugaJogo(Doom3))
console.log(removeJogo(Doom3))
console.log(removeJogo(Doom))
console.log(devolveJogo(Doom3))
console.log(alugaJogo(reEvil4))

console.log(listaJogosDisponiveis())