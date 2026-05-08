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
let hScore = document.querySelector('.human-score');
let cScore = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const roundPlaceholder = document.querySelector('.round-result > *:first-child');
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 1) {
        randomChoice = "🪨";
    } else if (randomChoice === 2) {
        randomChoice = "📃";
    } else {
        randomChoice = "✂️";
    }

    return randomChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === "🪨" && computerChoice === "✂️") ||
            (humanChoice === "📃" && computerChoice === "🪨") ||
            (humanChoice === "✂️" && computerChoice === "📃")
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
    // Creats a container that shows each player's choice
    const resultContainer = document.createElement('div')
    resultContainer.classList.add('result-container')
    // Shows what each player chose
    const humanBox = document.createElement('div')
    humanBox.classList.add('result-box')
    const humanResultChoice = document.createElement('p')
    humanResultChoice.classList.add('result-choice')
    const humanResult = document.createElement('p')
    humanResult.style.fontSize = '60px';
    const computerBox = document.createElement('div')
    computerBox.classList.add('result-box')
    const computerResultChoice = document.createElement('p')
    computerResultChoice.classList.add('result-choice')
    const computerResult = document.createElement('p')
    computerResult.style.fontSize = '60px';
    humanBox.append(humanResultChoice, humanResult)
    computerBox.append(computerResultChoice, computerResult)
    resultContainer.append(humanBox, computerBox)

    const roundWinner = document.createElement('p')
    roundWinner.classList.add('show-choice')
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const humanChoice = event.currentTarget.querySelector('.choice').textContent;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice)
            hScore.textContent = humanScore;
            cScore.textContent = computerScore;

            roundPlaceholder.style.display = 'none';
            humanResultChoice.textContent = 'YOU CHOSE';
            humanResult.textContent = humanChoice;
            computerResultChoice.textContent = 'COMPUTER CHOSE'
            roundWinner.textContent = playRound(humanChoice, computerChoice);
            computerResult.textContent = computerChoice;
            roundResult.append(resultContainer, roundWinner);
        })
    })
}
playGame();
