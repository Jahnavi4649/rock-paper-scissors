const gameOptions = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let message ="";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);

// function to get computer input through Math.random()
function getComputerChoice(){
    let choice =Math.floor(Math.random() * gameOptions.length ) ; 
    return gameOptions[choice];
}



//function to decide winner in each round and incrementing scores
function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        message = "Both choose same move!";
    }
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            computerScore++;
            message = "You lose! paper beats rock ";
        }
        if(computerChoice == "scissors"){
            humanScore++;
            message = "You win! rock beats scissors ";
        }
    }
    if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            humanScore++;
            message = "You win! paper beats rock ";
        }
        if(computerChoice == "scissors"){
            computerScore++;
            message = "You lose! scissors beats paper";
        }
    }
    if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            computerScore++;
            message = "You lose! rock beats scissors ";
        }
        if(computerChoice == "paper"){
            humanScore++;
            message = "You win! scissors beats paper ";
        }
    }
    return message;
}

const gamePage = document.getElementById("game-page");
const winnerPage = document.getElementById("winner-page");
const winner =document.getElementById("winner");
function playGame(e){
    console.log(e);
    const humanSelection = e.target.id;
    const computerSelection = getComputerChoice();

    const humanOptionSelected = document.getElementById("humanOptionSelected");
    humanOptionSelected.textContent = humanSelection;

    const computerOptionSelected = document.getElementById("computerOptionSelected");
    computerOptionSelected.textContent = computerSelection;

    let roundMessage = playRound(humanSelection, computerSelection);
    
    const messageElement = document.getElementById("roundMessage");
    messageElement.textContent = roundMessage.toUpperCase();

    const humanCurrentScore = document.getElementById("humanCurrentScore");
    humanCurrentScore.textContent = humanScore;

    const computerCurrentScore = document.getElementById("computerCurrentScore");
    computerCurrentScore.textContent = computerScore;

    if(humanScore == 5){
        winnerPage.classList.add("game-screen");
        winnerPage.classList.remove("hide-content");
        gamePage.classList.add("hide-content");
        gamePage.classList.remove("game-screen");
        winner.textContent = "CONGRATS! YOU WIN";
    }
    if(computerScore == 5){
        winnerPage.classList.add("game-screen");
        winnerPage.classList.remove("hide-content");
        gamePage.classList.add("hide-content");
        gamePage.classList.remove("game-screen");
        winner.textContent = "UH-OH! YOU LOSE";
    }
}

const playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener('click', function() {
    location.reload();
  });
    





