const gameOptions = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("comp: "+computerSelection);
console.log("human: "+humanSelection);
  
playRound(humanSelection, computerSelection);
  