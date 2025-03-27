/* 
The program: Build a console-based rock paper scissors game

===== PSEUDOCODE ====

FUNC getRandomInt with min and max 
  INIT minCeiled 
  INIT maxFloored
  INIT randomInt
  RETURN randomInt
ENDFUNC
FUNC getComputerChoice
  INIT randomInt to CALL getRandomInt with 0 and 2
  INIT computerChoice
  CASE for randomInt 
    condition 0 
      SET computerChoice to "rock"
    condition 1 
      SET computerChoice to "paper"
    condition 2 
      SET computerChoice to "scissors"
  ENDCASE 
  RETURN computerChoice
ENDFUNC
FUNC getHumanChoice 
  INIT humanChoice to READ string
  RETURN humanChoice
ENDFUNC
DEFINE playGame
  DEFINE playRound with humanChoice and computerChoice 
    SET humanChoice to lowercase
    CASE for humanChoice 
      condition "rock"
        IF computerChoice is "rock" THEN
          PRINT "Draw!" 
        ELSE IF computerChoice is "paper" THEN
          PRINT "You lose! Paper beats Rock"
          SET computerScore to increment
        ELSE IF computerChoice is "scissors" THEN
          PRINT "You win! Rock beats Scissors"
          SET humanScore to increment
        ENDIF
      condition "paper"
        IF computerChoice is "rock" THEN
          PRINT "You win! Paper beats Rock" 
          SET humanScore to increment
        ELSE IF computerChoice is "paper" THEN
          PRINT "Draw!"
        ELSE IF computerChoice is "scissors" THEN
          PRINT "You lose! Scissors beats Paper"
          SET computerScore to increment
        ENDIF
      condition "scissors"
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
  ENDFUNC 

  INIT humanScore to 0
  INIT computerScore to 0

  INIT humanSelection to CALL getHumanChoice
  INIT computerSelection to CALL getComputerChoice
  
  INIT i to 0
  FOR i is less than 5
    CALL playRound with humanSelection and computerSelection
  ENDFOR  
  IF humanScore == computerScore THEN
    PRINT "Game is a Draw! You know me too well"
  ENDIF 
  IF humanScore > computerScore THEN
    PRINT "Congrats! You just won the game"
  ELSE
    PRINT "Game over. Better luck next time!"
  ENDIF
ENDFUNC  
CALL playGame 

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
    console.log("You: " + humanScore + "\t\tComputer: " + computerScore + "\t\tRound: " + i + "/5");
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