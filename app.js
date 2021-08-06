/**
 * A Javascript Rock Paper Scissors game played in the console.
 */
// initialize variables and get html elements
const startBtn = document.querySelector('#startGame');
const scoreBoard = document.querySelector('.scores');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const pChoice = document.querySelector('#pChoice');
const cChoice = document.querySelector('#cChoice');
const msg = document.querySelector('#message');
const btnContainer = document.querySelector('.btn-container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// store users selection for round
let userPlay = "";
let compPlay = "";

// store points
let pPoints = 0;
let cPoints = 0;

// wait for user to click/start game
startBtn.addEventListener('click', () => {
    if(startBtn.innerText === "Start"){
        btnContainer.style.display = 'flex';
        scoreBoard.style.display = 'flex';
        startBtn.style.display = "none";
    } else {
        resetGame();
        startBtn.style.display = "none";
    }
})

// function to ask user for their choice (rock paper or scissors)
const btns = document.querySelectorAll('.choice');

btns.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        if(pPoints <= 4 && cPoints <= 4){
            userPlay = btn.id;
            pChoice.innerHTML = `<h4>${userPlay.toUpperCase()}</h4>`;
            computerPlay();
            checkWin();
            checkWinner();
        } 
    })
})


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
    // updates html on page with computers choice
    cChoice.innerHTML = `<h4>${choice().toUpperCase()}</h4>`;
    // stores computer choice to variable to use to compare against players choice
    compPlay = choice;
}

// resets points and text when game is over
function resetGame() {
    pPoints = 0;
    cPoints = 0;
    pScore.textContent = "0";
    cScore.textContent = "0";
    msg.textContent = "";
    pChoice.textContent = "";
    cChoice.textContent = "";


}

// gets choices from both player and computer and checks for winner
function checkWinner() {
            // checks to see if someone has won 5 rounds and updates text and button
            if (pPoints >= 5) {
                msg.textContent = "YOU WIN!";
                startBtn.style.display = "block";
                startBtn.textContent = "Reset";
            } else if (cPoints >= 5) {
                msg.textContent = "YOU LOSE!";
                startBtn.style.display = "block";
                startBtn.textContent = "Reset";
            }
}

function checkWin(){

        // first checks for tie
        if (userPlay === compPlay) {
            msg.textContent = `Tie! Try Again`
        }
        // checks for winner based on player selection, updates points and text accordingly.
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
    
        // once winner of round is decided, update scoreboard and button text
        pScore.textContent = `${pPoints}`;
        cScore.textContent = `${cPoints}`;

}


