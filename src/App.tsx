import React from 'react';
import logo from './logo.svg';
import FirstComponent from './Components/FirstComponent/FirstComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
