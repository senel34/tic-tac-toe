import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './pages/Gameboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard/>
      </div>
    );
  }
}

export default App;
