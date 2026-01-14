const cinema = {
  filme: "",
  sala: 0,
  totalAssentos: 0,
  assentosDisponiveis: [],
  assentosOcupados: [],
};

// Inicializa o cinema com um número total de assentos
const inicializarSala = (totalAssentos) => {
    cinema.totalAssentos = totalAssentos;
    cinema.assentosDisponiveis = [];
    cinema.assentosOcupados = [];

  for (let i = 1; i <= totalAssentos; i++) {
    cinema.assentosDisponiveis.push(i);
  }
};

// Realiza a compra de um ingresso específico
const comprarIngresso = (numeroAssento) => {
    if( numeroAssento < 1 || numeroAssento > cinema.totalAssentos) {
        return `O número do assento ${numeroAssento} é inválido.`
    }

  if (cinema.assentosDisponiveis.includes(numeroAssento)) {
    cinema.assentosDisponiveis = cinema.assentosDisponiveis.filter(
      (assento) => numeroAssento !== assento // Se o número do assento for diferente do número que quer ser comprado, vai retornar true, formando um novo array pra dentro de assentosDisponiveis
    );
    cinema.assentosOcupados.push(numeroAssento); // Coloca o número comprado dentro do array de assentosOcupados
    cinema.assentosOcupados.sort((a, b) => a - b);
      return `Parabéns pela compra do seu ingresso! Ingresso ${numeroAssento} adquirido com sucesso.`
  } else {
     return `Assento ${numeroAssento} já está reservado, por favor, escolha outro assento.`
  }
};

// Cancela a compra de um ingresso específico
const cancelarIngresso = (numeroAssento) => {
    if( numeroAssento < 1 || numeroAssento > cinema.totalAssentos) {
        return `O número do assento ${numeroAssento} é inválido.`
    }
    if (cinema.assentosOcupados.includes(numeroAssento)) {
        cinema.assentosOcupados = cinema.assentosOcupados.filter((assento) => assento !== numeroAssento); // Se o número do assento for diferente do número que quer ser cancelado, vai retornar true, formando um novo array pra dentro de assentosOcupados
        cinema.assentosDisponiveis.push(numeroAssento);
        cinema.assentosDisponiveis.sort((a, b) => a - b);
        return `Assento ${numeroAssento} cancelado com sucesso.`
    } else {
        return `O assento ${numeroAssento} ainda não está ocupado.`
    }
}

const relatorioSala = () => {
  return `Filme de hoje: ${cinema.filme}\n
  Sala: ${cinema.sala}\n
  Atualmente temos ${cinema.assentosDisponiveis.length} assentos livres\n
  Atualmente temos ${cinema.assentosOcupados.length} assentos reservados\n
  Lista de assentos disponíveis \n
  ${cinema.assentosDisponiveis.join('|')}\n
  Lista de assentos reservados \n
  ${cinema.assentosOcupados.join('|')}`;
}

cinema.filme = "Deus é Brasileiro"; 
cinema.sala = "2";

inicializarSala(100);
console.log(comprarIngresso(8));
console.log(comprarIngresso(8));
console.log(comprarIngresso(12));
console.log(comprarIngresso(17));
console.log(cancelarIngresso(17));
console.log(cancelarIngresso(17));
console.log(comprarIngresso(15));
console.log(comprarIngresso(17));
console.log(comprarIngresso(17));
console.log(relatorioSala());
