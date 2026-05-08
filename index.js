/* 
CREATE a function that generates a random number between 0 and 2 and assign that into ROCK, PAPER, or SCISSOR
CREATE a function that asks a user for their choice
    make choice case-insensitive
DECLARE two variables to keep track of scores and set it to 0
CREATE a function that takes human and computer choice as arguments, plays a single round, while incrementing the winner's score and logging the winner
CREATE a function that will play the game for 5 rounds
    make a for loop until i is greater than 5
    log the winner if the loop is done
*/
const hScore = document.querySelector('.human-score');
const cScore = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 1) {
        randomChoice = "Rock";
    } else if (randomChoice === 2) {
        randomChoice = "Paper";
    } else {
        randomChoice = "Scissor";
    }

    return randomChoice;
}

function getHumanChoice(humanChoice) {
    return humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            return `You won! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === computerChoice) {
            return `Tie`;
        } else {
            computerScore++;
            return `You lost. ${computerChoice} beats ${humanChoice}`;
        }
    }

    const winner = () => {
        if (humanScore > computerScore) {
            return `Game over. You won! ${humanScore} : ${computerScore}`;
        } else if (humanScore === computerScore) {
            return `Tie. ${humanScore} : ${computerScore}`;
        } else {
            return `You lost. ${computerScore} : ${humanScore}`;
        }
    };
    console.log(winner());
}
playGame();