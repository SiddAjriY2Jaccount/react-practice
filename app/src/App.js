import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet superstar="Aguila" gimmick="Fake Mexican" />
      <Greet superstar="Al Snow" gimmick="Barely a human">
        <p> What does everybody want? Head! </p>
      </Greet>
      <Welcome superstar="Rey Mysterio" gimmick="Real Mexican" />
      <Welcome superstar="Bill Gunn" gimmick="Badd Man">
        <p> OH YOU DIDN"T KNOW?!?!?! You better call somebody!!! </p>
      </Welcome>
    </div>
  );
}

export default App;
