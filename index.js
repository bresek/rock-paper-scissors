// check if script is conncted
console.log("Script connected!")

//define moves for game
let moves = ["rock", "paper", "scissors"]

function randomNumber() {
  return Math.floor(Math.random() * moves.length)
}



function computerPlay() {
  randMove = randomNumber()
  move = moves[randMove]
  console.log(move)
}

//rock beats scissors
//paper beats rock
//scissors beat paper

function playRound(playerSelection, computerSelection) {
  //process inputs to account for case
  playerSelection.toLowerCase()
  computerSelection.toLowerCase()

  //logic to decide who wins
  if (playerSelection === computerSelection) {
    return "Tie!"
  } else{
    if (playerSelection === "rock"){//handle rock
      if (computerSelection === "paper"){
        return "You lose! paper beats rock!"
      }else{
        return "You win! rock beats scissors!"
      }
    }else if(playerSelection === "paper"){
      if (computerSelection ==="rock"){
        return "You win! paper beats rock!"
      }else{
        return "You lose! scissors beats paper!"
      }
    }else{
      if(computerSelection === "paper"){
        return "You win! scissors beats paper!"
      }else{
        return "You lose! rock beats scissors!"
      }
    }
  }

}
