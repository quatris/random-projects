/*
Random number generator 1 to 3
1 = rock, 2 = paper, 3 = scissors
if randomNumber is 1 then rock
else if 2 then paper
else scissors
*/
let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

/*
compare strings
if split into wins, losses, else tie
return with string result

*/

function playRound(playerSelection, computerSelection) {
  let result;

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    result = `You lose! ${playerSelection} loses to ${computerSelection}.`;
  } else {
    result = `You tie! ${computerSelection} ties to ${playerSelection}.`;
}

roundNumber++;

// Check if the game is over
if (playerScore === 5 || computerScore === 5) {
  let winner = playerScore === 5 ? "Player" : "Computer";
  result += "\n\n" + `Game over! ${winner} wins ${playerScore}-${computerScore}`;

   // Disable the buttons to prevent further play
   const buttons = document.querySelectorAll("button");
   buttons.forEach((button) => (button.disabled = true));
 } else {
   result += "\n\n" + `Round ${roundNumber}: ${playerScore}-${computerScore}`;
 }

 // Update the game score and display the game result
  const playerScoreElem = document.getElementById("player-score");
  const computerScoreElem = document.getElementById("computer-score");
  const resultTextElem = document.getElementById("result-text");
  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;
  resultTextElem.textContent = result;

 console.log(result);
}

document.addEventListener("DOMContentLoaded", () => {
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");

  rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
  });

  paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
  });

  scissorsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
  });
});

