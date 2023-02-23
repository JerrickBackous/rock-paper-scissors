//create function named getComputerChoice() that randomly returns computer's choice
function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    let guess = Math.floor(Math.random() * rps.length);
    return rps[guess];
}

//create function that playes a single round of rock, paper, scissors
function playRound(user, computer) {
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
    console.log(roundOutcome)
    return roundOutcome
}


//create function named game()
    //create for loop that runs 5 times
    //call the playRound function inside loop and displey round winner (console.log(playRound()))
    //return winner

//use console.log to display winner