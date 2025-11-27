let humanScore = 0;
let computerScore = 0;

function getRandomNum() {
    let randomNum;
    randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}

function getComputerChoice() {
    const randomNum = getRandomNum();
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if ((humanChoice === 'rock') && (computerChoice === 'paper') ||
        (humanChoice === 'paper') && (computerChoice === 'scissors') ||
        (humanChoice === 'scissors') && (computerChoice === 'rock')
    ) {
        computerScore++;
        return 'You Lose! ' + computerChoice + ' beats ' + humanChoice;
    } else 
        if ((humanChoice === 'rock') && (computerChoice === 'scissors') || 
            (humanChoice === 'paper') && (computerChoice === 'rock') ||
            (humanChoice === 'scissors') && (computerChoice === 'paper')
        ) {
            humanScore++;
            return 'You Win! ' + humanChoice + ' beats ' + computerChoice;
    } else if (humanChoice === computerChoice) {
        return "It's a draw.";
    } else {
        return "Invalid input! Please choose Rock, Paper, or Scissors.";
    }
}

function updateScore(result) {
    document.getElementById('result').textContent = result;
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function showWinner() {
    let winnerMessage;
    if (humanScore > computerScore) {
        winnerMessage = 'You Win the Game! Congratulations!';
    } else {
        winnerMessage = 'You Lose! Better Luck Next Time!'
    }

    document.getElementById('result').textContent = winnerMessage;

    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

}

function handleChoice(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice,computerChoice);
        updateScore(result); 
        

    if (humanScore === 5 || computerScore === 5) {
        showWinner();
    }
        
}

document.getElementById('rock').addEventListener("click", () =>handleChoice('rock'));
document.getElementById('paper').addEventListener("click", () =>handleChoice('paper'));
document.getElementById('scissors').addEventListener("click", () =>handleChoice('scissors'));
