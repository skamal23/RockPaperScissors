console.log("Hello World");
function getComputerChoice(){
    let res = Math.floor(Math.random() * 3);
    switch(res){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors");
}

var humanScore = 0;
var computerScore = 0;
const humanSelection = getHumanChoice();
const computerSeletion = getComputerChoice();

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase()
    switch(humanChoice){
        case "rock":
            if(computerChoice == "scissors"){
                humanScore++;
                console.log("You win! Rock beats scissors.")
            }
            else if(computerChoice == "paper"){
                computerScore++;
                console.log("You lose! Paper beats rock.")
            }
            break;
        case "scissors":
            if(computerChoice == "paper"){
                humanScore++;
                console.log("You win! Scissors beats paper.")
            }
            else if(computerChoice == "rock"){
                computerScore++;
                console.log("You lose! Rock beats scissors.")
            }
            break;
        case "paper":
            if(computerChoice == "rock"){
                humanScore++;
                console.log("You win! Paper beats rock.")
            }
            else if(computerChoice == "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats paper.")
            }
            break;
    }
}