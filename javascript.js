//printing rpc randomly
function getComputerChoice(){
    const num = Math.floor(Math.random()*3);
        if(num == 0) return "rock";
            else if (num == 1) return "paper";
                else return "scissor";    
    
}


//get users choice
function getHumanChoice(){
    let userChoice = window.prompt("Enter your choice:");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

//setting scores of both player zero in starting

let humanScore = 0;
let computerScore = 0;

//Playing single round
function playRound(humanChoice, computerChoice){
    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);
    
    if(humanChoice===computerChoice)
        { 
            console.log("It's a tie")
        } 
    
    else if (humanChoice === "rock"){
        if (computerChoice==="paper"){
            console.log("You lose! Paper beats rock");
            computerScore+=1;
        }else {
            console.log("YOu win ! Rock beats Scissor");
            humanScore+=1;
        }
    }

    else if(humanChoice === "paper"){
        if(computerChoice === "scissor"){
            console.log("You loose! Scissor beats paper");
            computerScore+=1;
        }else {
            console.log("You win ! Paper beats Rock");
            humanScore+=1;
        }
    }

    else if (humanChoice==="scissor"){
        if (computerChoice==="rock"){
            console.log("You loose! Rock beats Scissor");
            computerScore+=1;
        }else{
            console.log("You win! Scissor beats Paper");
            humanScore+=1;
        }
    }
}

//play for 5 times and compare scores

function playGames(){

for (let i=1; i<=5 ; i++){

const humanSelection = getHumanChoice();
const computerSelection=getComputerChoice();

    playRound(humanSelection,computerSelection);
}

if (humanScore > computerScore){
    console.log("You win!");
}else if (humanScore<computerScore){
    console.log("You loose!");
}else {
    console.log("It's a tie!")
};

}


playGames();
