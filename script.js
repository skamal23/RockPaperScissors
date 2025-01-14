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

var humanScore = 0;
var computerScore = 0;
function playGame(choice){
    const humanChoice = choice.toLowerCase();
    const computerChoice = getComputerChoice();
    
    function playRound(humanChoice,computerChoice){   
        const resultElement = document.querySelector("#result");
        const scoreElement = document.querySelector("#score");     
        switch(humanChoice){
            case "rock":
                if(computerChoice == "scissors"){
                    humanScore++;
                    resultElement.textContent = "You win! Rock beats scissors.";
                }
                else if(computerChoice == "paper"){
                    computerScore++;
                    resultElement.textContent = "You lose! Paper beats rock.";
                }
                break;
            case "scissors":
                if(computerChoice == "paper"){
                    humanScore++;
                    resultElement.textContent = "You win! Scissors beats paper.";
                }
                else if(computerChoice == "rock"){
                    computerScore++;
                    resultElement.textContent = "You lose! Rock beats scissors.";
                }
                break;
            case "paper":
                if(computerChoice == "rock"){
                    humanScore++;
                    resultElement.textContent = "You win! Paper beats rock.";
                }
                else if(computerChoice == "scissors"){
                    computerScore++;
                    resultElement.textContent = "You lose! Scissors beats paper.";
                }
                break;
        }
        scoreElement.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        if(humanScore == 5 || computerScore == 5){
            const scoreNode = document.querySelector("#score");
            const res = document.createElement("div");
            if (humanScore > computerScore){
                res.textContent = "You win!"
            }
            else if(humanScore < computerScore) {
                res.textContent = "You lose..."
            }
            humanScore = 0;
            computerScore = 0;
            scoreNode.after(res);
        }
    }
    playRound(humanChoice,computerChoice);
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",() => playGame(button.textContent.trim()));
})
