function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      alert("You win! Paper beats Rock");
    } else if (computerSelection === "scissors") {
      alert("You lose! Scissors beat Paper");
    } else {
      alert("It's a tie!");
    }
  } else if (playerSelection === "rock"){
    if (computerSelection === "rock") {
      alert("It's a tie!");
    } else if (computerSelection === "scissors") {
      alert("You win! Rock beat Scisors");
    } else {
      alert("You lose! Paper beat Rock");
    }
  } else {
    if (computerSelection === "rock") {
      alert("You lose! Rock beat scissors");
    } else if (computerSelection === "scissors") {
      alert("It's a tie!");
    } else {
      alert("You win! Scissors beat Paper");
    }
  }
}
