const prompt = require("prompt-sync")(); 

let wins = 0 
let losses = 0 
let ties = 0 

const choice = prompt("Enter Rock, Paper or Scissors: ")
if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") { 
    console.log("Please enter a valid choice.")
}