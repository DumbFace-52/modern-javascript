// Algorithim (Rock Paper Scissors);

// Save and Update the Score;
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// checking if score === null;
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

// Getting a value out of local storage;
// localStorage.getItem('message');

// Function for user input;
/*
    This function simulates a game of Rock Paper Scissors.//+
    It takes a player's move as a parameter and compares it with the computer's move.
    The result is then displayed in an alert box.
*/
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Ha! Computer Wins!!';
    } else if (computerMove === 'paper') {
      result = 'You Win!!';
    } else {
      result = 'Its a Tie!';
    }
  } else if (playerMove == 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win!!';
    } else if (computerMove === 'paper') {
      result = 'Its a Tie!';
    } else {
      result = 'Ha! Computer Wins!!';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'Its a Tie!';
    } else if (computerMove === 'paper') {
      result = 'Ha! Computer Wins!!';
    } else {
      result = 'You Win!!';
    }
  }

  // Update the score;
  if (result === 'You Win!!') {
    score.wins++;
  } else if (result === 'Ha! Computer Wins!!') {
    score.losses++;
  } else {
    score.ties++;
  }

  // Saving the scores in local storage;
  localStorage.setItem('score', JSON.stringify(score));
  
  // Display the result and score in a popup;
alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

// Function to pick computer's move randomly;
// This function simulates the computer's move in a game of Rock Paper Scissors.
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}
