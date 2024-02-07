let result = ["Rock","Paper","Scissors"];

function computerPlay () {
    let randomSelection = result[Math.floor(Math.random() * result.length)];
    return randomSelection;
}

console.log(computerPlay())


function playRound(playerSelection, computerSelection){

    let playerSelectionLowCas = playerSelection.toLowerCase()
    let computerSelectionLowCas = computerSelection.toLowerCase()

    if (playerSelectionLowCas !== "rock" && playerSelectionLowCas !== "paper" && playerSelectionLowCas !== "scissors") {
        return "You can only input \"Rock\" \"Paper\" or \"Scissors\" 😐 Try again!";
    }

    if (playerSelectionLowCas === computerSelectionLowCas) {
        return "It's a draw";
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

let playerSelection = "Rock"
let computerSelection= computerPlay()

console.log(playRound(playerSelection, computerSelection))