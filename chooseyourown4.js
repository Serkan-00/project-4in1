const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play?: (y/n)");

if (answer.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right: (left/right)?");

    if (answer2 === "left") {
        console.log("You fall off the bridge");
    } else {
        // right
        console.log("Well done! you crossed the bridge");
        const answer3 = prompt("Would you like a sword or a gun?: (sword/gun) ");
        if (answer3 === "sword") {
            console.log("Wrong choice, you need a better weapon");
        } else {
            // gun
            console.log("Good choice!");
            const answer4 = prompt("You see a dragon, would you like to kill it?: (kill/spare)");
            if (answer4 === "kill") {
                console.log("You murderer!");
            } else {
                // spare
                console.log("Well done!");
            }
        }
    }
}

    











