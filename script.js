const buttons = document.querySelectorAll('.btn');
const hRes = document.querySelector('.h_res');
const cRes = document.querySelector('.c_res');
const res = document.querySelector('h3');

function comSelect() {
    const choices = ['paper', 'rock', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function stopButtons() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

let hScore = 0;
let cScore = 0;
let human = "";
let computer = "";

function playGame(humanSelect) {
    let computerSelect = comSelect();
    let result = "";

    if(humanSelect == 'paper' && computerSelect == 'rock' ||
    humanSelect == 'rock' && computerSelect == 'scissor' ||
    humanSelect == 'scissor' && computerSelect == 'paper') {
        hScore += 1;
        human = "Human: " + hScore;
        result = "You win! " + humanSelect + " beat " + computerSelect + ".";
        
        if(hScore == 5) {
            result = "Human score: " + hScore + " You won! Reload to play again.";
            stopButtons();
        }
    } else if (humanSelect == computerSelect) {
        result = "Tie! same selection.";
    } else {
        cScore += 1;
        computer = "Computer: " + cScore;
        result = "You lose! " + computerSelect + " beat " + humanSelect + ".";

        if(cScore == 5) {
            result = "Computer score: " + cScore + " You lost! Reload to play again.";
            stopButtons();
        }
    }

    hRes.textContent = human;
    cRes.textContent = computer;
    res.textContent = result;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(button.value);
    })
});
 
//create a function game and call the playRound function to play 5
//rounds by looping, the one reach 3 points will win the game.
/*function game() {
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

game();*/






