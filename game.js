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

//funcion to get user input through prompt
function getHumanChoice(){
    let input = prompt("Enter your choice: rock / paper / scissors");
    return input.toLowerCase() ;
}

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

//function to decide final winner and calls all other functions for 5 times(since the game contains 5 rounds) 
function playGame(e){
    console.log(e);
    const humanSelection = e.target.id;
    const computerSelection = getComputerChoice();
    console.log("comp: "+computerSelection);
    console.log("human: "+humanSelection);
    

    let roundMessage = playRound(humanSelection, computerSelection);
    console.log(roundMessage);
    console.log("computer score: "+ computerScore +", human score: "+humanScore);   
}

