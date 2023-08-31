const prompt = require("prompt-sync")(); 

console.log("Welcome to the quiz!")

const answer1 = prompt("What is the brain of the computer?: ")
const correct_answer1 = "CPU" 

if (answer1.toUpperCase() === correct_answer1) { 
    console.log("That is correct!");
} else { 
    console.log("That is wrong..."); 
}

 
const answer2 = prompt("What is better, Mercedes or BMW?: ")
const correct_answer2 = "BMW" 

if (answer2.toUpperCase() === correct_answer2) { 
    console.log("That is correct!");
} else { 
    console.log("That is wrong..."); 
}

 
const answer3 = prompt("What is the capital of Turkiye?: ")
const correct_answer3 = "ANKARA" 

if (answer3.toUpperCase() === correct_answer3) { 
    console.log("That is correct!");
} else { 
    console.log("That is wrong..."); 
}

 