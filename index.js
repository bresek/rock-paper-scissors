

// check if script is conncted
console.log("Script connected!")

//define moves for game
let moves = ["rock","paper","scissors"]

function randomNumber(){
  return Math.floor(Math.random()*moves.length)
}



function computerPlay(){
  randMove = randomNumber()
  move = moves[randMove]
  console.log(move)
}
