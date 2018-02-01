class Game {
  constructor() {
    this.inProgress = true;
    this.winner = null;
    this.currentTurn = Game.X;
    this.movesMade = 0;
    this.squares = new Array(9).fill().map( s => new Square() );
  }

  makeMove(i) {
    if (this.inProgress && !this.squares[i].value) {
      this.squares[i].value = this.currentTurn;
      this.movesMade++;
      this.checkForWinner();
      this.currentTurn = (this.currentTurn === Game.O) ? Game.X : Game.O;
    }
  }

  checkForWinner() {
    const winningCombinations = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7],[2,5,8],
      [0,4,8], [2,4,6]
    ];
    winningCombinations.forEach((wc) => {
      const [a, b, c] = wc;
      const squarea = this.squares[a];
      const squareb = this.squares[b];
      const squarec = this.squares[c];

      if (squarea.value && squarea.value == squareb.value && squarea.value == squarec.value) {
        this.inProgress= false;
        this.winner = squarea.value;
        squarea.isHighlighted = squareb.isHighlighted = squarec.isHighlighted = true;
      }
    });
// for a tie
    if (this.movesMade === this.squares.length){
      this.inProgress = false;
    }
  }

}

Game.O = 'O';
Game.X = 'X';