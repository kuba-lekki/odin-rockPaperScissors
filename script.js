console.info("Script.js has been loaded.");

let playerScore = 0;
let computerScore = 0;

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
            if (computerSelection == "rock") {
                console.log("Rock vs rock! It's a tie!");
            } 
            if (computerSelection == "paper") {
                console.log("Rock loses to paper! You lose!");
                computerScore += 1;
            }
            if (computerSelection == "scissors") {
                console.log("Rock beats scissors! You win!");
                playerScore += 1;
            }
        }

        if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                console.log("Paper beats rock! You win!");
                playerScore += 1;
            }
            if (computerSelection == "paper") {
                console.log("Paper vs paper! It's a tie!");
            }
            if (computerSelection == "scissors") {
                console.log("Paper loses to scissors! You lose!");
                computerScore += 1;
            }
        }

        if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                console.log("Scissors lose to rock! You lose!");
                computerScore += 1;
            }
            if (computerSelection == "paper") {
                console.log("Scissors beat paper! You win!");
                playerScore += 1;
            }
            if (computerSelection == "scissors") {
                console.log("Scissors vs scissors! It's a tie!");
            }
        }
    } else {
        console.log("Please enter a valid option: Rock / Paper / Scissors: ");
        playRound();
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    console.log("Best out of 5 wins! Go!");

    for (i=0; i<5; i++) {
        console.log("Round " + (i+1) + "... Fight!");
        playRound();
        console.log("Player: " + playerScore + " | Computer: " + computerScore);
    }

    if (playerScore > computerScore) return "Congratulations! You won!";
    else return "Unfortunately, you lost... Better luck next time!"
}