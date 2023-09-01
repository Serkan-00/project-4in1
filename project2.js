const prompt = require("prompt-sync")(); 


const target = Math.round(Math.random() * 100) // this gives a random number between 0-100

console.log(target)

let guesses = 0 

const guess = Number(prompt("Guess the number (0-100): ")); // the Number converts to number

