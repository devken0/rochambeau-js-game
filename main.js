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

CALL getRandomInt with min and max as parameters
CALL getComputerChoice
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

let userName = "Ken";
let greetings = "Horray " + userName + ", your code runs!";
console.log(greetings);

console.log(getRandomInt(1, 3));

