
function game() {

    const handPlayed = ["rock", "paper", "scissors"];
    let playerWins = 0;
    let computerWins = 0;
    
    function playBackstory () {
        setTimeout(() => console.log("In the mythical land of Tricoria, there existed three mighty kingdoms: Rockonia, Paperland, and Scissoria. "), 3000)
        setTimeout(() => console.log("Each kingdom was founded upon the principles of strength, wisdom, and cunning, respectively."), 4000)
        setTimeout(() => console.log("Long ago, the three kingdoms lived in harmony, guided by the ancient prophecy that foretold of an eternal balance between them."), 5000)
        setTimeout(() => console.log("However, as time passed, tensions rose, and rivalries deepened."), 6000)
        setTimeout(() => console.log("The once harmonious relationship turned into bitter competition as each kingdom sought dominance over the others."), 7000)
        setTimeout(() => console.log("The rulers of Rockonia, Paperland, and Scissoria believed that the fate of their kingdoms lay in the outcome of a sacred ritual known as 'The Hand of Destiny.'"), 8000)
        setTimeout(() => console.log("In this ritual, champions from each kingdom would engage in battles using the symbolic representations of their kingdoms: rock, paper, and scissors."), 9000)
        setTimeout(() => console.log("Legend has it that whoever triumphs in the Hand of Destiny would be granted the power to shape the destiny of Tricoria itself."), 10000)
        setTimeout(() => console.log("The stakes are high, and the outcome uncertain."), 11000)
        setTimeout(() => console.log("It's up to you, the chosen champion, to lead your kingdom to victory and restore balance to the land."), 12000)
        setTimeout(() => console.log("Choose your hand wisely, for the fate of Tricoria hangs in the balance!"), 13000)
        
        setTimeout(() => console.log("========================================================================================================"), 14000)
        setTimeout(() => console.log("Let the 5 duels begin!"), 15000)
    }
    
    function computerPlay() {
        const randomIndex = Math.floor(Math.random() * handPlayed.length);
        return handPlayed[randomIndex];
    }
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerWins++;
            return `You Win! ${playerSelection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
        } else {
            computerWins++;
            return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`;
        }
    }
    
    function validatePlayerSelection(selection) {
        while (true) {
          
            if (selection === null || selection.trim() === "" || !handPlayed.includes(selection.toLowerCase())) {
                selection = prompt('Please enter a valid hand: Rock, Paper, or Scissors');
            } else {
                return selection;
            }
        }
    }

    
    playBackstory();
    for (let i = 0; i < 5; i++) {
        console.log(`Duel ${i+1}:`);
        const playerSelection = validatePlayerSelection(prompt('Choose your hand: Rock, Paper, or Scissors'));
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerWins > computerWins) {
        console.log(`${playerWins} wins out of 5! You are the winner in the Hand of Destiny!`);
    } else if (computerWins > playerWins) {
        console.log(`I am the winner of the Hand of Destiny! ${computerWins} out of 5! Let the chaos ensue!`);
    } else {
        console.log(`It's a tie! No wait... That's not right!`);
    }

    return "Game over";
}

setTimeout(() => {
    game();
}, 2500);
