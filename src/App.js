import React from 'react';
import './App.css';
import './cards.css';
import Card from "./Card/Card";

function App() {
  return (
    <div className="App">
        <div className="playingCards faceImages">
          <Card rank="k" suit="spades"/>
        </div>
    </div>
  );
}

export default App;
