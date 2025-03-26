/* 
The program: Build a console-based rock paper scissors game

DEFINE getRandomInt
  INIT minCeiled 
  INIT maxFloored
  INIT randomInt
  RETURN randomInt
DEFINE getComputerChoice
  INIT randomInt to random number from 0-3
  INIT computerChoice
  IF randomInt is equal to 0 THEN
    SET computerChoice to "rock"
  ELSE IF
    SET computerChoice to "paper" 
  ELSE IF
    SET computerChoice to "scissors" 
  ENDIF
  RETURN computerChoice
DEFINE getHumanChoice with intChoice
  INIT humanChoiceInt
  INIT humanChoice
  IF humanChoiceInt is equal to 0 THEN
    SET humanChoice to "rock"
  ELSE IF 
    SET humanChoice to "paper" 
  ELSE IF
    SET humanChoice to "scissors" 
  ENDIF
  RETURN humanChoice

CALL getRandomInt with min and max as parameters
CALL getComputerChoice
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
  alert("1 = Rock\n2 = Paper\n3 = Scissors");
  let humanChoiceInt = Number(prompt("Enter your choice: "));
  let humanChoice;

  if (humanChoiceInt == 1){
    humanChoice = "rock";
  } else if (humanChoiceInt == 2){
    humanChoice = "paper";
  } else if (humanChoiceInt == 3){
    humanChoice = "scissors"
  }
  return humanChoice;
}

