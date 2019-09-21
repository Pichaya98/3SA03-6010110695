import React, { Component } from 'react';
import './App.css';
// import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

// const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className = "App">
        <h2 id="welcome">Let To Play Game</h2>
        {
        <WordCard value="hello WORLDS"/>
        }
        <h2 id="result"></h2>
      </div>
    );

  }
}
export default App;




