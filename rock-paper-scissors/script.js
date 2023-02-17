/*
Random number generator 1 to 3
1 = rock, 2 = paper, 3 = scissors
if randomNumber is 1 then rock
else if 2 then paper
else scissors
*/
let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

/*
player set to rock
compare strings
if split into wins, losses, else tie
return with string result

*/

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return `You lose! ${playerSelection} loses to ${computerSelection}`;
  } else
    return `You tie! ${computerSelection} ties to ${playerSelection}`;
}

/*
loop for 5 rounds of playRound()
keep score and report outcome
make variable for winCounter
make variable for loseCounter
if winCounter === loseCounter
then outcome = tie
else if winCounter > loseCounter
then outcome = win
else outcome = lose

*/

function game() {
    

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore === computerScore) {
    return `It's a tie! ${playerScore} vs ${computerScore}`;
  } else if (playerScore > computerScore) {
    return `You win! ${playerScore} vs ${computerScore}`;
  } else {
    return `You lose! ${computerScore} vs ${playerScore}`;
  }
}

console.log(game());
