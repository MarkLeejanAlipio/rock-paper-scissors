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

// Plays the game
function playGame() {
    // Scores
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    
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

    // DOM
    const buttons = document.querySelectorAll('.choice')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.dataset.choice;
            const computerChoice = getComputerChoice();
            const container = document.querySelector('.result-container');
    
            const result = playRound(humanChoice, computerChoice);
            const resultChoice = document.querySelector('.result')
            resultChoice.textContent = `Round result: ${result}`;

            round++;
            if (round === 5) {
                buttons.forEach(button => button.disabled = true);
                const winnerEl = document.createElement('p');
                winnerEl.classList.add('result');
                winnerEl.textContent = `Game result: ${winner()}`;
                container.appendChild(winnerEl)
            }
        })
    })
}
playGame();