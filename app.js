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

// wait for user to click/start game
startBtn.addEventListener('click', () => {
    // get users action (rock paper or scissors)
    playGame();
})

const promptUser = function () {
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
const computerPlay = function () {
    let choice = function () {
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                choice = "Rock";
                break;
            case 2:
                choice = "Paper";
                break;
            case 3:
                choice = "Scissors";
                break;
            default:
        }
        return choice;
    }
    cChoice.innerHTML = `<h4>${choice().toUpperCase()}</h4>`;
    compPlay = choice;
}

const playGame = function () {
    promptUser();
    computerPlay();
}


