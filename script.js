let result = ["Rock","Paper","Scissors"];

function computerPlay () {
    let randomSelection = result[Math.floor(Math.random() * result.length)];
    return randomSelection;
}


function playRound(playerSelection, computerSelection){

    let playerSelectionLowCas = playerSelection.toLowerCase()
    let computerSelectionLowCas = computerSelection.toLowerCase()

    if (playerSelectionLowCas !== "rock" && playerSelectionLowCas !== "paper" && playerSelectionLowCas !== "scissors") {
        return "You can only input \"Rock\" \"Paper\" or \"Scissors\" 😐 Try again!";
    }

    if (playerSelectionLowCas === computerSelectionLowCas) {
        return "It's a draw!";
      } else if (
        (playerSelectionLowCas === "rock" && computerSelectionLowCas === "scissors") ||
        (playerSelectionLowCas === "paper" && computerSelectionLowCas === "rock") ||
        (playerSelectionLowCas === "scissors" && computerSelectionLowCas === "paper")
      ) {
        return `You Win! ${playerSelectionLowCas} beats ${computerSelectionLowCas}`;
      } else {
        return `You Lose! ${playerSelectionLowCas} beats ${computerSelectionLowCas}`;
    }
}

function game (){

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Round " + round + ": Choose Rock, Paper, or Scissors");
        let computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log("Round " + round + ": " + roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game! 🏆");
    } else if (playerScore < computerScore) {
        console.log("You lose the game. Try again! 😔");
    } else {
        console.log("It's a tie! Try again for a winner. 🤝");
    }
}

// game(); 

alert('Hello! You\'ll be playing Rock Paper Scissors with me! And yes I\'m a computer so let the Human ⚔️ Machine Battle start ');
setTimeout(() => console.log('The game starts in..'), 14000);
setTimeout(() => console.log('3..'), 15000);
setTimeout(() => console.log('2..'), 16000);
setTimeout(() => console.log('1..'), 17000);
setTimeout(() => game(), 18000);

/* let playerSelection = ""
let computerSelection= computerPlay();
console.log(playRound(playerSelection, computerSelection)); */