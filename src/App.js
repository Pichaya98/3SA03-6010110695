import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';


const word = ['Heineken','Federbrau','Singha']
var item = word[Math.floor(Math.random()*word.length)];


class App extends Component {
  
  constructor(){
    super()

    
    this.url = "http://streaming11.tdiradio.com:8000/tdiradiobor.mp3";
  this.audio = new Audio(this.url);
  console.log(this.audio);
  this.audio.play();
  }

  newgame = () => {
    window.location.reload(false);
  }
  
  getAnswer = (answer) => {
    document.getElementById('complete').innerHTML = `Answer : ${answer}`;
  }
  


  render() {
    return (
      <div className= "App">
        <h1 className="welcome"> Let To Play Game</h1>

        <WordCard value={item.toUpperCase()} getAnswer={this.getAnswer}/>
        <h2 id="your-answer"></h2>
        <h1 id="result"></h1>
        <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
      </div>
    );

  }
}
export default App;




