// Exercise: Coin Flip Game;
/*
    1. Generate a random number w/ Math.random(). Save it in a variable.
    2. Create an if-statement and check:
    - If the random number is less than 0.5, print "Heads".
    - Else display "Tails".
    3. Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.
    4. Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess("heads" or "tails").
    -If your guess matches the result, display "You Win!" in the console.
    -If your guess doesn't match the result, display "You Lose!" in the console.
    5. (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition? A:B).
*/


// Solution: Coin Flip Game; Use of conditional statements;

// Initializing a variable;
const randomNumber = Math.random();

// Using if-statement;
if (randomNumber < 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
};

// Using ternary operator;
randomNumber < 0.5 ? console.log("Heads") : console.log("Tails");

// Saving the result (heads or tails) in a variable called result;
let result = "";

if (randomNumber < 0.5) {
  result = "Heads";
} else {
  result = "Tails";
};

// Let's say we're trying to guess the result. Create a variable called guess and save your guess("heads" or "tails").
const guess = "Heads";

// If your guess matches the result, display "You Win!" in the console.
if (guess === result) {
  console.log("You Win!");
} else {
  console.log("You Lose!");
};

// Using ternary operator;
guess === result ? console.log("You Win!") : console.log("You Lose!");

// Full Code:

const randomNum = Math.random();
let theResult = "";

if (randomNum < 0.5) {
  theResult = "Heads";
} else {
  theResult = "Tails";
};

const canYouGuess = "Heads";

if (canYouGuess === theResult) {
  console.log("You Win!");
} else {
  console.log("You Lose!");
};

canYouGuess === result ? console.log("You Win!") : console.log("You Lose!");


