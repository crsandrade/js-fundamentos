const cinema = {
  filme: "string",
  sala: "number",
  totalAssentos: "number",
  assentosDisponiveis: [],
  assentosOcupados: [],
};

// Inicializa o cinema com um número total de assentos
const inicializarSala = (totalAssentos) => {
  for (let i = 0; i <= totalAssentos; i++) {
    cinema.assentosDisponiveis.push(i);
  }
};

// Realiza a compra de um ingresso específico
const comprarIngresso = (numeroAssento) => {
  if (cinema.assentosDisponiveis.includes(numeroAssento)) {
    cinema.assentosDisponiveis = cinema.assentosDisponiveis.filter(
      (assento) => numeroAssento !== assento // Se o número do assento for diferente do número que quer ser comprado, vai retornar true, formando um novo array pra dentro de assentosDisponiveis
    );
    cinema.assentosOcupados.push(numeroAssento); // Coloca o número comprado dentro do array de assentosOcupados
    console.log(
      `Parabéns pela compra do seu ingresso! Ingresso ${numeroAssento} adquirido com sucesso.`
    );
  } else {
    console.log(
      `Assento ${numeroAssento} já está reservado, por favor, escolha outro assento.`
    );
  }
};

// Cancela a compra de um ingresso específico
const cancelarIngresso = (numeroAssento) => {
    if (cinema.assentosOcupados.includes(numeroAssento)) {
        cinema.assentosOcupados = cinema.assentosOcupados.filter((assento) => assento !== numeroAssento); // Se o número do assento for diferente do número que quer ser cancelado, vai retornar true, formando um novo array pra dentro de assentosOcupados
        cinema.assentosDisponiveis.push(numeroAssento);
        console.log(`Assento ${numeroAssento} cancelado com sucesso.`)
    } else {
        console.log(`O assento ${numeroAssento} ainda não está ocupado.`)
    }
}

function relatorioSala() {
  console.log(`Filme de hoje: ${cinema.filme}`);
  console.log(`Sala: ${cinema.sala}`);
  console.log(`Atualmente temos ${cinema.assentosDisponiveis.length} assentos livres`);
  console.log(`Atualmente temos ${cinema.assentosOcupados.length} assentos reservados`);
  console.log(`Lista de assentos disponíveis \n ${cinema.assentosDisponiveis.join('|')}`);
  console.log(`Lista de assentos reservados \n ${cinema.assentosOcupados.join('|')}`);
}

cinema.filme = "Deus é Brasileiro";
cinema.sala = "2";
cinema.totalAssentos = 100;

inicializarSala(99);
comprarIngresso(8);
comprarIngresso(8);
comprarIngresso(12);
comprarIngresso(17);
cancelarIngresso(17);
cancelarIngresso(17)
comprarIngresso(15)
comprarIngresso(17)
comprarIngresso(17)
relatorioSala();
