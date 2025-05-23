/* 
The program: Build a console-based rock paper scissors game
*/

// Getting a random integer between two values.
// It returns a random integer between the specified values. 
// The value is no lower than min (or the next integer greater than min if min isn't an integer), 
// and is less than or equal to max.
function getRandomInt(min, max){
  let minCeiled = Math.ceil(min);
  let maxFloored = Math.floor(max);
  let randomInt = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  return randomInt;
}

function getComputerChoice(){
  const randomInt = getRandomInt(0, 2);
  let computerChoice;

  switch (randomInt) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice(){
  let humanChoice = String(prompt("Enter your choice: "));
  return humanChoice;
}

function getRoundWinner(humanChoice, computerChoice){
  let roundWinner = "";
  switch(humanChoice){
    case "rock":
      if(computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        roundWinner = "Computer";
      } else if(computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors");
        roundWinner = "Human";
      } else {
        roundWinner = "Draw";
      }
      break;
    case "paper":
      if(computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        roundWinner = "Human";
      } else if(computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        roundWinner = "Computer";
      } else {
        roundWinner = "Draw";
      }
      break;
    case "scissors":
      if(computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        roundWinner = "Computer";
      } else if(computerChoice == "paper"){
        console.log("You win! Scissors beats Paper");
        roundWinner = "Human";
      } else {
        roundWinner = "Draw";
      }
      break;
  }
  return roundWinner;
}

function playGame(){
  function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    const roundWinner = getRoundWinner(humanChoice, computerChoice);
    if (roundWinner == "Human"){
      humanScore == ++humanScore;
    } else if (roundWinner == "Computer")  {
      computerScore == ++computerScore;
    } else if (roundWinner == "Draw"){
      console.log("Draw!");
    } else {
      console.log("Oops!");
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  for(let i = 1; i < 6; ++i){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("You: " + humanScore + "\tComputer: " + computerScore + "\t\tRound: " + i + "/5");
  }
  if(humanScore == computerScore){
    alert("Game is a draw! You know me too well");
  } else if(humanScore > computerScore){
    alert("Congrats! You just won the game");
  } else {
    alert("Game over. Better luck next time!");
  }
}

playGame();