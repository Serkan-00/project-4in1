const prompt = require("prompt-sync")(); 

const target = Math.round(Math.random() * 100) // this gives a random number between 0-100

let guesses = 0 
console.log(target)

while (true) { 
 guesses++; 

 const guess = Number(prompt("Guess the number (0-100): ")); // the Number converts to number
 if (guess > target) { 
      console.log("Your guess is too high.")
 } else if (guess < target) {
    console.log("Your guess is too low.")
} else { 
     console.log("You guessed it!")
  break; 
}
}

console.log("You guessed it in", guesses, "tries!"); 
