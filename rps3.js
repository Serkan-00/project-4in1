const prompt = require("prompt-sync")(); 

let wins = 0 
let losses = 0 
let ties = 0 

while (true) { 
const playerChoice = prompt("Enter Rock, Paper or Scissors (or q to quit): ") 
if (playerChoice.toLowerCase() === "q") { 
    break; 
}
if (playerChoice !== "Rock" && 
    playerChoice !== "Paper" && 
    playerChoice !== "Scissors") { 
    console.log("Please enter a valid choice.")
    continue; 
}

const choices = ["Rock", "Paper", "Scissors"]
const randomIndex = Math.round(Math.random() * 2) 
const computerChoice = choices[randomIndex]; 

console.log("The computer chose:", computerChoice); 

if (computerChoice === playerChoice) { 
    console.log("Draw!"); 
    ties ++;
} else if ( 
    (playerChoice === "Paper" && computerChoice === "Rock") || 
    (playerChoice === "Rock" && computerChoice === "Scissors") || 
    (playerChoice === "Scissors" && computerChoice === "Paper")
) { 
    console.log("Wins!")
    wins++
} else { 
    console.log("Lost!")
    losses ++; 
}
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties); 