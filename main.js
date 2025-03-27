/* 
The program: Build a console-based rock paper scissors game

===== PSEUDOCODE ====

DEFINE getRandomInt with min and max as parameters
  INIT minCeiled 
  INIT maxFloored
  INIT randomInt
  RETURN randomInt
DEFINE getComputerChoice
  INIT randomInt to CALL getRandomInt with 0, 2 as parameters
  INIT computerChoice
  SWITCH for randomInt 
    CASE 0 
      SET computerChoice to "rock"
    CASE 1 
      SET computerChoice to "paper"
    CASE 2 
      SET computerChoice to "scissors"
  ENDSWITCH
  RETURN computerChoice
DEFINE getHumanChoice 
  INIT humanChoice to prompt for input 
  RETURN humanChoice
DEFINE playRound with humanChoice and computerChoice as parameters
  SET humanChoice to lowercase
  SWITCH for humanChoice 
    CASE "rock"
      IF computerChoice is "rock" THEN
        PRINT "Draw!" 
      ELSE IF computerChoice is "paper" THEN
        PRINT "You lose! Paper beats Rock"
        SET computerScore to increment
      ELSE IF computerChoice is "scissors" THEN
        PRINT "You win! Rock beats Scissors"
        SET humanScore to increment
      ENDIF
    CASE "paper"
      IF computerChoice is "rock" THEN
        PRINT "You win! Paper beats Rock" 
        SET humanScore to increment
      ELSE IF computerChoice is "paper" THEN
        PRINT "Draw!"
      ELSE IF computerChoice is "scissors" THEN
        PRINT "You lose! Scissors beats Paper"
        SET computerScore to increment
      ENDIF
    CASE "scissors"
      IF computerChoice is "rock" THEN
        PRINT "You lose! Rock beats Scissors" 
        SET computerScore to increment
      ELSE IF computerChoice is "paper" THEN
        PRINT "You win! Scissors beat Paper"
        SET humanScore to increment
      ELSE IF computerChoice is "scissors" THEN
        PRINT "Draw!"
      ENDIF
  ENDSWITCH
  
INIT humanScore to 0
INIT computerScore to 0

INIT humanSelection to CALL getHumanChoice
INIT computerSelection to CALL getComputerChoice

CALL playRound with humanSelection and computerSelection

*/

// Check if JavaScript is linked correctly
// let userName = "Ken";
// let greetings = "Hooray " + userName + ", your code runs!";
// console.log(greetings);

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
  let randomInt = getRandomInt(0, 2);
  let computerChoice;

  // switch case conditional 
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
  alert("Rock Paper Scissors!");
  let humanChoice = String(prompt("Enter your choice: "));
  return humanChoice;
}

