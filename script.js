let result = ["Rock","Paper","Scissors"];

function computerPlay () {
    let randomSelection = result[Math.floor(Math.random() * result.length)];
    return randomSelection;
}

console.log(computerPlay())


function playRound(playerSelection, computerSelection){

}