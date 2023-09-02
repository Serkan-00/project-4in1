const prompt = require("prompt-sync")(); 

const target = Math.round(Math.random() * 100); 

console.log(target) 

let guesses = 0; 

while (true) { 
    guesses++ 
    const guess = Number(prompt("Guess the number: ")) //this will turn it into a number

    if (guess > target) { 
        console.log("You guessed too high!") 
    } else if (guess < target) { 
        console.log("You guessed it too low.")
    } else { 
        console.log("You guessed it right")
        break; 
    }
}


console.log("You guessed it", guesses, "times, well done!") 