let result = ['Rock', 'Paper', 'Scissors'];
let finishGame = false;
function computerPlay() {
  let randomSelection = result[Math.floor(Math.random() * result.length)];
  return randomSelection;
}

function isValidInput(userInput) {
  let playerSelectionLowCas = userInput.toLowerCase().trim();

  //console.log('Player picked ' + playerSelectionLowCas);
  //return true;
  if (
    playerSelectionLowCas !== 'rock' &&
    playerSelectionLowCas !== 'paper' &&
    playerSelectionLowCas !== 'scissors' &&
    playerSelectionLowCas !== '' &&
    playerSelectionLowCas !== null
  ) {
    console.log(
      'You can only input "Rock" "Paper" or "Scissors" 😐 Try again!'
    );
    return false;
  } else {
    console.log('Player picked ' + playerSelectionLowCas);
    return true;
  }
}

function playRound(playerSelection, computerSelection) {
  // let playerSelectionLowCas = isValidInput(playerSelection);
  let playerSelectionLowCas = playerSelection.toLowerCase();
  let computerSelectionLowCas = computerSelection.toLowerCase();

  if (playerSelectionLowCas === computerSelectionLowCas) {
    return "It's a draw!";
  } else if (
    (playerSelectionLowCas === 'rock' &&
      computerSelectionLowCas === 'scissors') ||
    (playerSelectionLowCas === 'paper' && computerSelectionLowCas === 'rock') ||
    (playerSelectionLowCas === 'scissors' &&
      computerSelectionLowCas === 'paper')
  ) {
    return `You Win! ${playerSelectionLowCas} beats ${computerSelectionLowCas}`;
  } else {
    return `You Lose! ${playerSelectionLowCas} beats ${computerSelectionLowCas}`;
  }
}

function cancelGame() {
  if (confirm('Are you sure you want to quit the game?')) {
    console.log('%cThank you for playing!', 'color:blue; font-weight:bold;');
    finishGame = true;
  }
}

function playerPlay() {
  let playerSelection = prompt('Type either Rock, Paper, or Scissors!');
  if (playerSelection === null) {
    cancelGame();
    return null;
  }
  if (!finishGame && !isValidInput(playerSelection)) {
    return playerPlay();
  } else {
    return playerSelection;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  finishGame = false;

  for (let round = 1; round <= 5; round++) {
    let playerSelection = playerPlay();
    if (finishGame) {
      return null;
    }
    let computerSelection = computerPlay();

    let roundResult = playRound(playerSelection, computerSelection);
    console.log('Round ' + round + ': ' + roundResult);

    if (roundResult.includes('Win')) {
      playerScore++;
    } else if (roundResult.includes('Lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('You win the game! 🏆');
  } else if (playerScore < computerScore) {
    console.log('You lose the game. Try again! 😔');
  } else {
    console.log("It's a tie! Try again for a winner. 🤝");
  }
}

// game();

alert(
  "Hello! You'll be playing Rock Paper Scissors with me! And yes I'm a computer so let the Human ⚔️ Machine Battle start "
);
setTimeout(() => console.log('The game starts in..'), 3000);
setTimeout(() => console.log('3..'), 4000);
setTimeout(() => console.log('2..'), 5000);
setTimeout(() => console.log('1..'), 6000);
setTimeout(() => game(), 7000);

/* let playerSelection = ""
let computerSelection= computerPlay();
console.log(playRound(playerSelection, computerSelection)); */
