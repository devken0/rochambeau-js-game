const intro = document.querySelector("#intro");
const rounds = document.querySelector("#rounds");
const scores= document.querySelector("#scores");
const gameWinner = document.querySelector("#game-winner");
const buttons = document.querySelector("#buttons");
const resetBtn = document.createElement("button");
const quit = document.createElement("p");
const playerScoreDisplay = document.createElement("span");
const computerScoreDisplay = document.createElement("span");

let playerScore = 0;
let computerScore = 0;
let round = 1;

// Getting a random integer between two values.
// It returns a random integer between the specified values. 
// The value is no lower than min (or the next integer greater than min if min isn't an integer), 
// and is less than or equal to max.
function getRandomInt(min, max){
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)); // The maximum is inclusive and the minimum is inclusive
}

function getComputerSelection(){
  return ["rock", "paper", "scissors"][getRandomInt(0,2)];
}

function getRoundWinner(playerSelection, computerChoice){
  if (playerSelection === computerChoice) return "Draw";
  if (
    (playerSelection === "rock" && computerChoice === "scissors") || 
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ){
    return "Human";
  } 
  return "Computer"
}

function addScore(winner){
  if (winner == "Human"){
    playerScore++;
    playerScoreDisplay.style.color = "orange";
    console.log("Player wins the round!");
  } else if (winner == "Computer")  {
    computerScore++;
    computerScoreDisplay.style.color = "orange";
    console.log("Computer wins the round!");
  } else if (winner == "Draw"){
    playerScoreDisplay.style.color = "red";
    computerScoreDisplay.style.color = "red";
    console.log("Its a draw!");
  } else {
    console.log("Oops!");
  }
  return;
}

function resetGame(){
  playerScore = 0; 
  computerScore = 0;
  round = 1;
  console.log("Resetting...");
  rounds.textContent = "Game has been reset, choose your pick!";
  scores.innerHTML = '';
  gameWinner.innerHTML = '';

  // Re-enable buttons
  const allButtons = buttons.querySelectorAll("button");
  allButtons.forEach(btn => btn.disabled = false);

  // Reset colors
  playerScoreDisplay.style.color = "black";
  computerScoreDisplay.style.color = "black";
}

function playRound(playerSelection){
  const computerChoice = getComputerSelection();
  const winner = getRoundWinner(playerSelection, computerChoice);
  console.log(`You chose ${playerSelection}, Computer chose ${computerChoice}`);

  playerScoreDisplay.style.color = "black";
  computerScoreDisplay.style.color = "black";
  
  addScore(winner);
  intro.remove();
  resetBtn.innerHTML = `<i class="fa fa-refresh" aria-hidden="true"></i>`;
  resetBtn.setAttribute("id", "resetBtn");
  buttons.appendChild(resetBtn);
  resetBtn.addEventListener("click", () => resetGame());

  rounds.textContent = `Player chose ${playerSelection}, Computer chose ${computerChoice}`;  
  scores.textContent = "Player: ";
  playerScoreDisplay.textContent = `${playerScore}`;
  scores.appendChild(playerScoreDisplay);
  const spacer = document.createTextNode("  Computer: ");
  scores.appendChild(spacer);
  computerScoreDisplay.textContent = `${computerScore}`;
  scores.appendChild(computerScoreDisplay);

  round++;

  console.log("You: " + playerScore + "\tComputer: " + computerScore);

  if (playerScore === 5 || computerScore === 5){
    console.log(playerScore > computerScore ? "You win the game!" : "Computer wins!");
    const allButtons = buttons.querySelectorAll("button");
    allButtons.forEach(btn => btn.disabled = true);
    resetBtn.disabled = false;
    playerScore > computerScore ? gameWinner.textContent = "You win!" : gameWinner.textContent = "You lose!";
    playerScore > computerScore ? gameWinner.style.color = "green" : gameWinner.style.color = "red";
    //document.body.appendChild(resetBtn);
  } 

  quit.innerHTML = '<a href="#">Quit</a>';
  document.body.appendChild(quit);

  quit.addEventListener("click", () => location.reload(true));
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));

