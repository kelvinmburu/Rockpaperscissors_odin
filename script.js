function game(){
    let choices = {
      paper: "rock",
      scissors: "paper",
      rock: "scissors"
    }
  
    function computerPlay(){
      let gameChoice = Object.keys(choices);
      return gameChoice[Math.floor(Math.random()* gameChoice.length)];
    }
  
    function getInput(){
      let prompt = window.prompt("Play 5 times with good entries . \n Enter either rock or paper or scissors ").toLowerCase();
      if(!Object.keys(choices).includes(prompt)){
        prompt = window.prompt("Play 5 times with good entries . \n Enter either rock or paper or scissors ").toLowerCase();
      }
      return prompt;
    }
  
    let playerSelection = getInput();
    let computerSelection = computerPlay();
  
    function playRound(playerSelection, computerSelection){
      console.log(`Player: ${playerSelection}`);
      console.log(`Player: ${computerSelection}`);
      if(playerSelection === computerSelection){
        return "draw";
      }else {
        if(playerSelection === "rock"){
          if(computerSelection === "paper"){
            console.log("You Lose! 😭️😂️ Paper wraps the rock🤭️ !");
          }else{
            console.log("You win 😀️😜️! Rock smashes scissors 😉️.");
          }
        }else if(playerSelection === "paper"){
          if(computerSelection === "scissors"){
            console.log("You Lose! 😭️😂️ Scissors cuts paper🤭️ !")
          }else{
            console.log("You win 😀️😜️! Paper wraps the rock 😉️.")
          }
        }else if(playerSelection === "scissors"){
          if(computerSelection === "paper"){
            console.log("You win 😀️😜️! Scissors cuts paper 😉️.")
          }else{
            console.log("You Lose! 😭️😂️ Rock smashes scissors🤭️ !");
          }
        }
      }
    }
    return playRound(playerSelection, computerSelection);
  }
  
  function gameLoop(){
    for(i = 0; i < 5; i++){
      console.log(game());
    }
  }
  
  console.log(gameLoop());
  
  /* freecodecamp JS */
  /* caching the DOM */
  const userScore = 0;
  const computerScore = 0;
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("computer-score");
  const scoreBoard_div = document.querySelector(".score-board");
  const result_div = document.querySelector(".result");
  const rock_div = document.getElementById("r");
  const paper_div = document.getElementById("p");
  const scissors_div = document.getElementById("s");
  
  rock_div.addEventListener('click', function(){
    console.log("you clicked on rock");
  })