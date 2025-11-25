let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

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

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: (Rock, Paper, Scissors)");
    if (humanChoice) {
        return humanChoice.toLowerCase();
    } else {
        return '';
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
        return 'You Lose! ' + humanChoice + ' beats ' + computerChoice;
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

function playGame(humanChoice, computerChoice) {
    for (i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
}

playGame(humanChoice, computerChoice);

if (humanScore > computerScore) {
    console.log('You win! You beat the computer!');
} else {
    console.log("You suck! You're a loser!");
}



