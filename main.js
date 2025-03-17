/* 
The program: Build a console-based rock paper scissors game

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
*/

let userName = "Ken";
let greetings = "Hello " + userName;
console.log(greetings);