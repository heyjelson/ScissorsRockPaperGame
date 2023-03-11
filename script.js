//generates random value for computer to choose.
function computerChoice() {
    const choices = ["paper", "rock", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//create variables to use in the playRound function.
let computerSelection = computerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//create a function playRound to play the computerSelection and 
//playerSelection variables.
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "rock" ||
       playerSelection == "rock" && computerSelection == "scissor" ||
       playerSelection == "scissor" && computerSelection == "paper") {
        playerScore++;
        console.log("You win! " + playerSelection + " beat " + computerSelection + ".");
        console.log("Human score: " + playerScore);
       }else if(playerSelection == computerSelection) {
        console.log("It's a tie! Same selection.");
       } else {
        computerScore++;
        console.log("You lose! " + computerSelection + " beat " + playerSelection + ".");
        console.log("Computer score: " + computerScore);
       }   
}

//create a function game and call the playRound function to play 5
//rounds by looping, the one reach 3 points will win the game.
function game() {
    let gameRounds = 5;
    let scoreToWin = 3;

    for(let i = 0; i < gameRounds; i++) {
        if(computerScore != scoreToWin && playerScore != scoreToWin) { 
            playerSelection = prompt("Enter value paper, rock, or scissor", "").toLowerCase(); 
            if(playerSelection == computerSelection) {
                i--;
                console.log("It's a tie! Same selection.");
            }else {
                playRound(playerSelection, computerSelection);
            }  
        }
    }

    if(computerScore == scoreToWin) {
        console.log(playerScore + " / " + computerScore + " Computer win the game!");
    } else {
        console.log(playerScore + " / " + computerScore + " Human win the game!");  
    } 
}

game();






