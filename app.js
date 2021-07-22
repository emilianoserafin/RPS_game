/**
 * A Javascript Rock Paper Scissors game played in the console.
 */

// function that returns 1 of 3 options (rock, paper or scissors) 
let computerPlay = function () {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "uh oh, something went wrong";
    }
}

function game(num) {

    for (let i = 0; i < num; i++) {

        console.log(playRound())
        if (playRound() === "It's a tie! Try Again") {
            i -= 1;
        }
    }


}

const playRound = function () {

    let playerSelection = prompt("please choose Rock, Paper or Scissors:").toLowerCase();
    let computerSelection = computerPlay();

    // first check if both players picked same play (tie)
    if (playerSelection === computerSelection) {

        return "It's a tie! Try Again"
    }
    // check who wins if player plays rock
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors!";
        } else {
            return `You lose! ${computerSelection} beats Rock!`
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        } else {
            return `You lose! ${computerSelection} beats Paper!`
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats Paper!";
        } else {
            return `You lose! ${computerSelection} beats Scissors!`
        }
    }
}



