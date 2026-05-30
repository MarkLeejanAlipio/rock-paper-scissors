const hScore = document.querySelector('.human-score');
const cScore = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const roundPlaceholder = document.querySelector('.round-result > *:first-child');
const buttons = document.querySelectorAll('.choices button');
const paBtn = document.querySelector('.pa-btn')

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
    // element for who won the round
    const roundWinner = document.createElement('p')
    roundWinner.classList.add('show-choice')

    const gameResult = document.createElement('p')
    gameResult.classList.add('show-choice')
    resultContainer.style.display = 'none';
    roundWinner.style.display = 'none';
    gameResult.style.display = 'none';
    roundResult.append(resultContainer, roundWinner, gameResult);

    function resetGame() {
        humanScore = 0;
        computerScore = 0;

        hScore.textContent = 0;
        cScore.textContent = 0;

        roundPlaceholder.style.display = '';
        resultContainer.style.display = 'none';
        roundWinner.style.display = 'none';
        gameResult.style.display = 'none';

        humanResultChoice.textContent = '';
        humanResult.textContent = '';
        computerResultChoice.textContent = '';
        computerResult.textContent = '';
        roundWinner.textContent = '';
        gameResult.textContent = '';

        buttons.forEach((button) => {
            button.disabled = false;
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const humanChoice = event.currentTarget.querySelector('.choice').textContent;
            const computerChoice = getComputerChoice();
            const roundMessage = playRound(humanChoice, computerChoice);
            hScore.textContent = humanScore;
            cScore.textContent = computerScore;

            roundPlaceholder.style.display = 'none';
            resultContainer.style.display = 'flex';
            roundWinner.style.display = 'block';
            humanResultChoice.textContent = 'YOU CHOSE';
            humanResult.textContent = humanChoice;
            computerResultChoice.textContent = 'COMPUTER CHOSE'
            roundWinner.textContent = roundMessage;
            computerResult.textContent = computerChoice;

            if (humanScore === 5 || computerScore === 5) {
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                if (humanScore > computerScore) {
                    gameResult.textContent = "You WON!";
                } else {
                    gameResult.textContent = "You lost...";
                }
                gameResult.style.display = 'block';
            }
        })
    })

    if (paBtn) {
        paBtn.addEventListener('click', resetGame);
    }
}
playGame();