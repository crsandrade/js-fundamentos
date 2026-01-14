const [opcao1, opcao2, opcao3] = ["Pedra", "Papel", "Tesoura"]

function enfrenta(playerA, playerB) {
    if(playerA === playerB) {
        return "Draw";
    }

    if(playerA === "Tesoura" && playerB === "Papel" || 
    playerA === "Pedra" && playerB === "Tesoura" || 
    playerA === "Papel" && playerB === "Pedra") {
        return "Player 1 Won"
    }
    return "Player 2 Won"
}


console.log(enfrenta(opcao1, opcao2));
console.log(enfrenta(opcao2, opcao2));
console.log(enfrenta(opcao3, opcao2));
console.log(enfrenta(opcao2, opcao2));
console.log(enfrenta(opcao2, opcao3));