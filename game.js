const gameOptions = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let message ="";

// getComputerChoice() uses Math.random to randomly return rock/paper/scissors 
function getComputerChoice(){
    const min =0, max =2;
    let choice =Math.floor(Math.random() * (max - min + 1) ) + min; //returns an integer between 0 and 2(both included)
    return gameOptions[choice];
}

function getHumanChoice(){
    let input = prompt("Enter your choice");
    return input.toLowerCase() ;
}

playGame();

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

 
function playGame(){
    for(let i=0; i<5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        console.log("comp: "+computerSelection);
        console.log("human: "+humanSelection);

        let roundMessage = playRound(humanSelection, computerSelection);
        // document.getElementById("message").innerHTML = roundMessage;
        // console.log("message: " + message);
        console.log("humanScore: " + humanScore + ", computerScore: " + computerScore);

        
    }
    if(humanScore > computerScore){
        console.log("winner: human");
    }
    else{
        console.log("winner: computer");
    }
    
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log("comp: "+computerSelection);
// console.log("human: "+humanSelection);
  
// playRound(humanSelection, computerSelection);
  