/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {  

    const validChoices = ["Pedra", "Papel", "Tesoura"];

    if (!validChoices.includes(player1) || !validChoices.includes(player2)) {

        return "Escolha inválida!";
        
    }

    if (player1 === player2) {  

        return "Empate!";

    } 

    const rules = {

        "Pedra": "Tesoura",
        "Tesoura": "Papel",
        "Papel": "Pedra"

    };

    if (rules[player1] === player2) {
        return "Jogador 1 venceu!";

    } 

        return "Jogador 2 venceu!"; 
}