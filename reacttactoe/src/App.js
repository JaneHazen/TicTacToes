import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="tictactoe">
        <div id="head">
          Tic REACT Toe!
        </div>
        <div id="board">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    );
  }
}

export default App;
