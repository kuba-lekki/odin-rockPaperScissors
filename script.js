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
            if (computerSelection == "rock") return "Rock vs rock! It's a tie!";
            if (computerSelection == "paper") return "Rock loses to paper! You lose!";
            if (computerSelection == "scissors") return "Rock beats scissors! You win!";
        }

        if (playerSelection == "paper") {
            if (computerSelection == "rock") return "Paper beats rock! You win!";
            if (computerSelection == "paper") return "Paper vs paper! It's a tie!";
            if (computerSelection == "scissors") return "Paper loses to scissors! You lose!";
        }

        if (playerSelection == "scissors") {
            if (computerSelection == "rock") return "Scissors lose to rock! You lose!";
            if (computerSelection == "paper") return "Scissors beat paper! You win!";
            if (computerSelection == "scissors") return "Scissors vs scissors! It's a tie!";
        }
    } else {
        console.log("Please enter a valid option: Rock / Paper / Scissors: ");
        playRound();
    }
}