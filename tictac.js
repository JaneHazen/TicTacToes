function startGame(){
  for(var i = 1; i <= 9; i++){
    clearBox(i);
  }
  document.turn = "X";
  document.winner = null;
  document.message = changeMessage(document.turn + ", you start")
}

function newMove(square){
  if(document.winner != null){
    changeMessage("Stoppit! " + document.turn + " already won!")
  }else if (square.innerText == ""){
    square.innerText = document.turn;
    switchPlayer();
  } else {
    changeMessage("Find an empty space!")
  }
}

function switchPlayer(){
  if(checkForWinner(document.turn)) {
    changeMessage("You're a Winner, " + document.turn + "!")
    document.winner = document.turn;
  } else if(document.turn == "X"){
      document.turn = "O";
      changeMessage("Now it's your turn, " + document.turn + "!")
  } else {
      document.turn = "X";
      changeMessage("Now it's your turn, " + document.turn + "!")
  }
}

function changeMessage(msg){
  document.getElementById("message").innerText = msg
}

function checkForWinner(move){
  var gameOver = false;
  if (checkRow(1,2,3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
    ) {
    gameOver = true;
  }
  return gameOver
}

function checkRow(a, b, c, move){
  var gameOver = false;
  if (getSquare(a) == move && getSquare(b) == move && getSquare(c) == move){
    gameOver = true;
  }
  return gameOver;
}

function getSquare(number){
  return document.getElementById("s" + number).innerText;
}

function clearBox(number){
  document.getElementById("s" + number).innerText = "";
}