let result = ['rock', 'paper', 'scissors'];
let finishGame = false;
function computerPlay() {
  let randomSelection = result[Math.floor(Math.random() * result.length)];
  return randomSelection;
}

function isValidInput(userInput) {
  let playerSelectionLowCas = userInput.toLowerCase().trim();

  if (
    playerSelectionLowCas !== 'rock' &&
    playerSelectionLowCas !== 'paper' &&
    playerSelectionLowCas !== 'scissors'
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
  let playerSelectionLowCas = playerSelection.toLowerCase().trim();
  let computerSelectionLowCas = computerSelection.toLowerCase();

  if (playerSelectionLowCas === computerSelectionLowCas) {
    return `It's a draw! We both picked ${playerSelectionLowCas}`;
  } else if (
    (playerSelectionLowCas === 'rock' &&
      computerSelectionLowCas === 'scissors') ||
    (playerSelectionLowCas === 'paper' && computerSelectionLowCas === 'rock') ||
    (playerSelectionLowCas === 'scissors' &&
      computerSelectionLowCas === 'paper')
  ) {
    return `You Win! ${playerSelectionLowCas} beats ${computerSelectionLowCas}`;
  } else {
    return `You Lose! ${computerSelectionLowCas} beats ${playerSelectionLowCas}`;
  }
}

function playerPlay() {
  let playerSelection = prompt('Type either Rock, Paper, or Scissors!');

  if (playerSelection === null) {
    const choice = confirm('Are you sure you want to quit the game?');

    if (choice) {
      console.log('%cThank you for playing!', 'color:blue; font-weight:bold;');
      finishGame = true;
    } else {
      playerPlay();
    }
  }

  if (!finishGame && !isValidInput(playerSelection)) {
    return playerPlay();
  } else {
    return playerSelection;
  }
}
function playAgain() {
  let playAgainPrompt = confirm('Do you want to play again?');

  if (!playAgainPrompt) {
    console.log('%cThank you for playing! 😊', 'color:blue; font-weight:bold;');
    console.log(
      '%cMeant to say yes? Type game() in this console',
      'color:#ccc; font-size: 9px;'
    );
  } else {
    console.clear();
    console.log("%cYay! Let's play again 😊", 'color:blue; font-weight:bold;');
    console.log('%cRemember:', 'color:#999; font-weight:bold;');
    console.log('%cRock👊🏼 beats scissors✂️', 'color:#999; font-weight:bold;');
    console.log('%cScissors✂️ beats paper🖐🏼', 'color:#999; font-weight:bold;');
    console.log('%cPaper🖐🏼 beats rock👊🏼', 'color:#999; font-weight:bold;');
    console.log(
      "%cGood luck! We'll play 5 rounds",
      'color:#cdbc3a; font-weight:bold;'
    );
    game();
  }
}

const funnyMessages = (win) => {
  const funnyWinMessages = [
    'AHHH! You have defeated me!',
    'You are on a roll!',
    'If you are the winner, clap your hands *clap clap*',
    'You are the bees knees!',
    'You are the BOMB.COM!',
  ];

  const funnyLoseMessages = [
    "It's okay, everyone loses sometimes.",
    'You will never defeat me! MWAHAHAHA!',
    'Oh no! You need to try again to beat me!',
    'Just believe in the heart of the cards.',
    'Better luck next time!',
  ];

  const showMessage = win ? funnyWinMessages : funnyLoseMessages;
  const randomMessage =
    showMessage[Math.floor(Math.random() * showMessage.length)];
  return randomMessage;
};

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
    console.log(
      `You won the game! 🏆 You scored ${playerScore} and computer scored ${computerScore}`
    );
    console.log(` ${funnyMessages(true)}`);
  } else if (playerScore < computerScore) {
    console.log(
      `You lose the game. Try again! 😔 You scored ${playerScore} and computer scored ${computerScore}`
    );
    console.log(` ${funnyMessages(false)}`);
  } else {
    console.log("It's a tie! Try again if you dare 🤪");
  }

  playAgain();
}

alert(
  "Hello! You'll be playing Rock Paper Scissors with me! And yes I'm a computer so let the Human VS Machine Battle start! ⚔️"
);
setTimeout(() => console.log('The game starts in..'), 3000);
setTimeout(() => console.log('3..'), 4000);
setTimeout(() => console.log('2..'), 5000);
setTimeout(() => console.log('1..'), 6000);
setTimeout(() => game(), 7000);
