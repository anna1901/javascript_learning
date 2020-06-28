function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection + computerSelection);
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "win";
    } else if (computerSelection === "scissors") {
      return "lose";
    } else {
      return "tie";
    }
  } else if (playerSelection === "rock"){
    if (computerSelection === "rock") {
      return "tie";
    } else if (computerSelection === "scissors") {
      return "win";
    } else {
      return "lose";
    }
  } else if (playerSelection === "scissors"){
    if (computerSelection === "rock") {
      return "lose";
    } else if (computerSelection === "scissors") {
      return "tie";
    } else {
      return "win";
    }
  } else {
    return "wrong input"
  }
}


function game() {
  let playerSelection, computerSelection, result, playerScore = 0, computerScore = 0;
  for (var i = 0; i < 5; i++) {
    playerSelection = prompt("What's your move?");
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    if (result === "win") {
      console.log(`You won! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (result === "lose"){
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    } else if (result === "tie") {
      console.log("It's a tie");
    } else {
      console.log("Wrong input");
    }
  }
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  playerScore > computerScore ? console.log("You won!") : console.log("You lost!");
}
