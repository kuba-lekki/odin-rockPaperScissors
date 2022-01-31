console.info("Script.js has been loaded.");

function computerPlay() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber >= 0.33 && randomNumber < 0.66) return "paper";
    else return "scissors";
}

function playRound() {
    //ask user to choose rock, paper or scissors
    let playerSelection = (window.prompt("Rock / Paper / Scissors: ")).toLowerCase();
    console.log("The player has chosen: " + playerSelection);
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        //use the computerPlay() function to determine the CPU's play
        let computerSelection = computerPlay();
        console.log("The computer has chosen: " + computerSelection);
        //compare the players selection with the CPU's selection & output the winner
        if (playerSelection == "rock") {
            if (computerSelection == "rock") return "tie";
            if (computerSelection == "paper") return "computer";
            if (computerSelection == "scissors") return "player";
        }

        if (playerSelection == "paper") {
            if (computerSelection == "rock") return "player";
            if (computerSelection == "paper") return "tie";
            if (computerSelection == "scissors") return "computer";
        }

        if (playerSelection == "scissors") {
            if (computerSelection == "rock") return "computer";
            if (computerSelection == "paper") return "player";
            if (computerSelection == "scissors") return "tie";
        }
    } else {
        console.log("Please enter a valid option: Rock / Paper / Scissors: ");
        playRound();
    }
}