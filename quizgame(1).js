const prompt = require("prompt-sync")(); 

console.log("Welcome to the quiz!")

let correctAnswers = 0; 
let totalQuestions = 3; 


const answer1 = prompt("What is the brain of the computer?: ")
const correctAnswer1 = "CPU" 

if (answer1.toUpperCase() === correctAnswer1) { 
    console.log("That is correct!");
    correctAnswers++; 
} else { 
    console.log("That is wrong..."); 
}

 
const answer2 = prompt("What is better, Mercedes or BMW?: ")
const correctAnswer2 = "BMW" 

if (answer2.toUpperCase() === correctAnswer2) { 
    console.log("That is correct!");
    correctAnswers++
} else { 
    console.log("That is wrong..."); 
}

 
const answer3 = prompt("What is the capital of Turkiye?: ")
const correctAnswer3 = "ANKARA" 

if (answer3.toUpperCase() === correctAnswer3) { 
    console.log("That is correct!");
    correctAnswers++ 
} else { 
    console.log("That is wrong..."); 
}

const percent = Math.round((correctAnswers / totalQuestions) * 100)

console.log("You got", correctAnswers, "questions correct!"); 
console.log("You got", percent, "%"); 
 