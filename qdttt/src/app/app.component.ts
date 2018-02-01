import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1 class="header">
        TictANGULARtoe
      </h1>
      <board></board>
  `,
  styles: [`
    .header: {
      background-color: white;
      color: #2364AA;
    }
    `
  ]
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector:'board',
  template: `
  <div class="row">
    <div class="status">{{status}}</div>
    <button (click)="newGame()">New Game</button>
  </div>
  <div class="row square" *ngFor="let row of [0,1,2]">
    <square *ngFor="let col of [0,1,2]"
     [state]="squares[col+row*3]"
     (click)="makeMove(col+row*3)"></square>
  </div>
  `,
  styles: [`
    .row {
      clear:both;
      color: #EA7317;
    }
    .row square {
      background-color: #EA7317;
    }
    .status {
      color: #FEC601;
    }
  `]
})
export class Board {
  squares = Array(9).fill(null);
  player = 'X';
  winner = null;

  newGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
  }

  get status() {
    return this.winner ? `Winner is ${this.winner}` : `Player: ${this.player}`;
  }
  makeMove(position) {
    if (!this.squares[position]) {
      this.squares[position] = this.player;
      if (this.winningMove()) {
        this.winner = this.player;
      }
      this.player = this.player == 'X' ? 'O' : 'X';
    }
  }

  winningMove(): boolean {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let line of lines){
      if (this.squares[line[0]]
        && this.squares[line[0]] == this.squares[line[1]]
        && this.squares[line[1]] == this.squares[line[2]]){
        return true;
      }
    }
    return false;
  }

}

@Component({
  selector: 'square',
  template: `{{state}}`,
  styles: [`
  :host {
    width: 45px;
    height: 45px;
    border: solid 1px grey;
    float: left;
    color: #2364AA;
    font-size: 36px;
    text-align: center;
  }
  `]
})

export class Square {
  @Input() state;
}