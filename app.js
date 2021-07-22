/**
 * A Javascript Rock Paper Scissors game played in the console.
 */

const startBtn = document.querySelector('#startGame');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const pChoice = document.querySelector('#pChoice');
const cChoice = document.querySelector('#cChoice');
const msg = document.querySelector('#message');

// store users selection for round
let userPlay = "";
let compPlay = "";

// store points
let pPoints = 0;
let cPoints = 4;

// wait for user to click/start game
startBtn.addEventListener('click', () => {
    if (startBtn.textContent === "Start" || startBtn.textContent === "Next Round") {
        // get users action (rock paper or scissors)
        playGame();
    } else {
        resetGame();
    }
})

// function to ask user for their choice (rock paper or scissors)
function promptUser() {
    // ask user for their choice
    userPlay = prompt("Please choose Rock, Paper or Scissors").toLowerCase();
    // check to see if choice was valid
    if (userPlay === "rock" || userPlay === "paper" || userPlay === "scissors") {
        //if valid, display player choice on page
        pChoice.innerHTML = `<h4>${userPlay.toUpperCase()}</h4>`;
    } else {
        //if not valid, alert user and re-prompt for selection
        alert('Invalid Selection, please try again')
        promptUser();
    }

}

// function that returns 1 of 3 options (rock, paper or scissors) 
function computerPlay() {
    let choice = function () {
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                choice = "rock";
                break;
            case 2:
                choice = "paper";
                break;
            case 3:
                choice = "scissors";
                break;
            default:
        }
        return choice;
    }
    cChoice.innerHTML = `<h4>${choice().toUpperCase()}</h4>`;
    compPlay = choice;
}

function resetGame() {
    pPoints = 0;
    cPoints = 0;
    pScore.textContent = "0";
    cScore.textContent = "0";
    msg.textContent = "";
    startBtn.textContent = "Start";
}


function playGame() {

    computerPlay();
    promptUser();

    if (userPlay === compPlay) {
        msg.textContent = `Tie! Try Again`
    }

    else if (userPlay === "rock") {
        if (compPlay === "scissors") {
            msg.textContent = `You Win! Rock beats Scissors.`;
            pPoints += 1;
        } else {
            msg.textContent = `You Lose! Paper beats Rock.`;
            cPoints += 1;
        }
    }
    else if (userPlay === "paper") {
        if (compPlay === "rock") {
            msg.textContent = `You Win! Paper beats Rock.`;
            pPoints += 1;
        } else {
            msg.textContent = `You Lose! Scissors beats Paper.`;
            cPoints += 1;
        }
    }
    else if (userPlay === "scissors") {
        if (compPlay === "paper") {
            msg.textContent = `You Win! Scissors beats Paper.`;
            pPoints += 1;
        } else {
            msg.textContent = `You Lose! Rock beats Scissors.`;
            cPoints += 1;
        }
    }

    pScore.textContent = `${pPoints}`;
    cScore.textContent = `${cPoints}`;
    startBtn.textContent = "Next Round";

    if (pPoints === 5) {
        msg.textContent = "YOU WIN!";
        startBtn.textContent = "Reset";
    } else if (cPoints === 5) {
        msg.textContent = "YOU LOSE!";
        startBtn.textContent = "Reset";
    }

}


