//create function named getComputerChoice() that randomly returns computer's choice
function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    let guess = Math.floor(Math.random() * rps.length);
    return rps[guess];
}

//create function that playes a single round of rock, paper, scissors
function playRound() {
    //playerSelection is the player's choice (case-insensitive) (prompt())
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

    //computerSelection is the computer's choice    
    computerSelection = getComputerChoice();

    let roundOutcome = "nothing"
    //return a string that declares the winner, like  "You lose! Paper beats Rock"
    if (playerSelection === computerSelection) {
        roundOutcome = "Tie";
        return roundOutcome;
    } else {
        if  ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")) {
            roundOutcome = "You lose!"
        } else {
            roundOutcome = "You win!"
        }
    }
    return roundOutcome
}


//create function named game()
function game() {
    //create for loop that runs 5 times
    x = 0;
    y = 0;
    gameWinner = "none";
    for (i = 0; i<5; i++) {
        //call the playRound function inside loop and displey round winner (console.log(playRound()))
        let roundWinner = playRound();
        console.log(roundWinner);

        if (roundWinner === "You win!") {
            x += 1;
        } else if (roundWinner === "You lose!") {
            y += 1;
        }

        //return winner
        if (x > y) {
            gameWinner = "You win the game!"
        } else if (x < y) {
            gameWinner = "You lose the game."
        } else {
            gameWinner = "Tie Game."
        }
    }
    return gameWinner
}

let playGame = game() 
//use console.log to display winner
console.log(playGame)