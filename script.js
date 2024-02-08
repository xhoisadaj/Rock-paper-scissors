let result = ['Rock', 'Paper', 'Scissors'];
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
  // let playerSelectionLowCas = isValidInput(playerSelection);
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
  // if (playerSelection === null) {
  //   cancelGame();
  // } else {
  //   let playerSelection = prompt('Type either Rock, Paper, or Scissors!');
  // }
  if (playerSelection === null) {
    const choice = prompt(`To quit the game, type "yes" to confirm`)
      ?.trim()
      .toLowerCase();
    if (choice === 'yes') {
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
  let playAgainPrompt = prompt('Want to play again? y/n');
  if (
    !playAgainPrompt ||
    (playAgainPrompt.toLowerCase() !== 'y' &&
      playAgainPrompt.toLowerCase() !== 'n')
  ) {
    console.log(
      '%cInvalid option! Options are y(yes) or n(no).',
      'color:red; font-weight:bold;'
    );
    playAgain();
  } else if (playAgainPrompt.toLowerCase() == 'y') {
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
  } else if (playAgainPrompt.toLowerCase() == 'n') {
    console.log('%cThank you for playing! 😊', 'color:blue; font-weight:bold;');
    console.log(
      '%cMeant to say say? Type game() in this console',
      'color:#ccc; font-size: 9px;'
    );
  }
}

const addFunnyMessage = (win) => {
  const funnyWinInfo = [
    'Amazing, You were born to win!',
    "Wow, you're a rockstar!",
    "You're the ultimate champion!",
    "You're unstoppable",
    'You are on fire!',
  ];

  const funnyloseInfo = [
    'Losing is essential to anyone’s success.',
    'You are a fighter, never give up!',
    'You almost got it! Keep it up!',
    "You've got skills, keep practicing!",
    'Dont worry, better luck soon!',
  ];

  const displayMessage = win ? funnyWinInfo : funnyloseInfo;
  const randomMessage =
    displayMessage[Math.floor(Math.random() * displayMessage.length)];
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
    console.log('You win the game! 🏆');
    console.log(` ${addFunnyMessage(true)}`);
  } else if (playerScore < computerScore) {
    console.log('You lose the game. Try again! 😔');
    console.log(` ${addFunnyMessage(false)}`);
  } else {
    console.log("It's a tie! Try again if you dare 🤪");
  }
  playAgain();
}

// game();

alert(
  "Hello! You'll be playing Rock Paper Scissors with me! And yes I'm a computer so let the Human VS Machine Battle start! ⚔️"
);
setTimeout(() => console.log('The game starts in..'), 3000);
setTimeout(() => console.log('3..'), 4000);
setTimeout(() => console.log('2..'), 5000);
setTimeout(() => console.log('1..'), 6000);
setTimeout(() => game(), 7000);
