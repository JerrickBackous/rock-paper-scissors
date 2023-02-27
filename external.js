//create function named getComputerChoice() that randomly returns computer's choice
function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    let guess = Math.floor(Math.random() * rps.length);
    return rps[guess];
}

function insertDOM (classAdded, wording, preface) {
    const out = document.querySelector('.output');
    const divChild = document.createElement('div');
    divChild.classList.add(classAdded);
    divChild.textContent = preface + wording;
    out.appendChild(divChild);
}

//create function that playes a single round of rock, paper, scissors
function playRound(playerSelection, _i, _win, _lose) {
    //playerSelection is the player's choice (case-insensitive) (prompt())
    //computerSelection is the computer's choice 
    computerSelection = getComputerChoice();

    let roundOutcome = "nothing";
    //return a string that declares the winner, like  "You lose! Paper beats Rock"
    if (playerSelection.target.id === computerSelection) {
        roundOutcome = "Tie";
    } else {
        if  ((playerSelection.target.id === "rock" && computerSelection === "paper") || 
            (playerSelection.target.id === "paper" && computerSelection === "scissors") ||
            (playerSelection.target.id === "scissors" && computerSelection === "rock")) {
            roundOutcome = "You lose!";
            lose++
        } else {
            win++
            roundOutcome = "You win!";
        }
    }
    
    insertDOM('round', roundOutcome, i + 1 + ". ");


    if (win >= 5) {
        roundOutcome = "You won the game!"
        i = 0;
        win = 0;
        lose = 0;
        insertDOM('final', roundOutcome, "Final: ");
    } else if (lose >= 5) {
        roundOutcome = "You lost the game."
        i = 0;
        win = 0;
        lose = 0;
        insertDOM('final', roundOutcome, "Final: ");
    }

    i++
    
    return roundOutcome;
}

let i = 0;
let win = 0;
let lose = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', playRound, btnRock);
btnPaper.addEventListener('click', playRound, btnPaper);
btnScissors.addEventListener('click', playRound, btnScissors);

//let playGame = game();
//use console.log to display winner

