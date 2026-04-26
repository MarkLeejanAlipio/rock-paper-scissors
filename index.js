// Create a function that randomly generates a number between 0 to 2 and assigned them to Rock, Paper, and Scissors
// Create a function that ask a human their choice using prompt method
// Declare two variables that keeps track of each player's score and set it to 0
// Create a function that plays a single round that takes both choices and increments the winner's score while logging a winner annoucement
// Create a function that allows the players to play 5 rounds and declare a winner at the end 

// Gets computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else if (computerChoice === 2) {
        return 'Scissors';
    }
}

// Get human choice
// function getHumanChoice() {
//     

//     return humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
// }

// Plays the game
function playGame() {
    // Scores
    let humanScore = 0;
    let computerScore = 0;
    
    // Plays the round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'Rock' && computerChoice === 'Scissors' ||
            humanChoice === 'Scissors' && computerChoice === 'Paper'||
            humanChoice === 'Paper' && computerChoice === 'Rock') {
            humanScore++;
            return `You won! ${humanChoice} beats ${computerChoice}`;
        }  else if (humanChoice === computerChoice) {
            return 'Tie';
        }  else {
            computerScore++;
            return `You lost. ${computerChoice} beats ${humanChoice}`;
        }
    }

    // Declares the winner
    let winner = () => {
        if (humanScore > computerScore) {
        return `You won! ${humanScore} : ${computerScore}`
        } else if (humanScore === computerScore) {
            return `Tie. ${computerScore} : ${humanScore}`
        } else {
            return `You lost. ${computerScore} : ${humanScore}`
        }
    } 
}

playGame();