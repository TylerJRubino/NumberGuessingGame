function runGame() {
    //mutable variables
    let guessString = "";
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    //immutable variables
    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    // const variables above could be condensed into the code below

    // const target = Math.floor(Math.random() * 100) + 1;

    do {
        guessString = prompt(
            `I am thinking of a number in the range of 1 to 100. \n\nWhat is the number?`
        );
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    // Tells the user that they guessed the number correctly and how many tries it took them.
    alert(
        `You got it! The number was ${target}. \n\n It took you ${numTries} tries to guess the number correctly.`
    );
}

// Checks if the user enters a valid integer while checking if their guess is to large or to small
//if neither guess is to large or to small then the user has guessed the correct Number
function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert(
            `You have not entered a number. \n\nPlease enter a number in the 1-100 range.`
        );
    } else if (guessNumber < 1 || guessNumber > 100) {
        alert(`Please enter an integer in the 1-100 range.`);
    } else if (guessNumber > target) {
        alert(`Your number is too large!`);
    } else if (guessNumber < target) {
        alert(`Your number is too small!`);
    } else {
        correct = true;
    }
    return correct;
}