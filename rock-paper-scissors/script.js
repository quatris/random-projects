/*
Random number generator 1 to 3
1 = rock, 2 = paper, 3 = scissors
if randomNumber is 1 then rock
else if 2 then paper
else scissors
*/

let randomNumber = Math.floor(Math.random() * 3) + 1;
let weapon = getComputerChoice();

function getComputerChoice() {
if (randomNumber === 1)
 return "Rock";
 else if (randomNumber === 2)
 return "Paper";
 else 
 return "Scissors";

}

console.log(randomNumber);
console.log(weapon);