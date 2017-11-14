function startGame(){
  document.turn = "X";
  document.message = changeMessage(document.turn + ", you start")
}

function newMove(square){
  if (square.innerText == ""){
    square.innerText = document.turn;
    switchPlayer();
    changeMessage("Now it's your turn, " + document.turn)
  } else {
    changeMessage("Find an empty space!")
  }
}

function switchPlayer(){
  if (document.turn === "X"){
      document.turn = "O"
  }
  else {
      document.turn = "X"
  }
}

function changeMessage(msg){
  document.getElementById("message").innerText = msg
}

function checkBoard(){

}