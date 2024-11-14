// Using Function for a Rock Paper Scissors game:

// Function for user input;
/*
This function simulates a game of Rock Paper Scissors.//+
 * It takes a player's move as a parameter and compares it with the computer's move.//+
 * The result is then displayed in an alert box.
*/
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Ha! Computer Wins!!🥲🥲';
    } else if (computerMove === 'paper') {
      result = 'You Win!!😎😎';
    } else {
      result = 'Its a Tie! 😭😭';
    }

  } else if (playerMove == 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win!!😎😎';
    } else if (computerMove === 'paper') {
      result = 'Its a Tie! 😭😭';
    } else {
      result = 'Ha! Computer Wins!!🥲🥲';
    }

  } else {
    if (computerMove === 'rock') {
      result = 'Its a Tie! 😭😭';
    } else if (computerMove === 'paper') {
      result = 'Ha! Computer Wins!!🥲🥲';
    } else {
      result = 'You Win!!😎😎';
    }
  }

  alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}`);
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
