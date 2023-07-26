import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState<string>('Press me');

  const handleClick = () => {
    fetch('http://localhost:8000/health-check')
      .then((response: Response) => {
        return response.text();
      })
      .then((message: string) => {
        setText(message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={handleClick}>{text}</button>
      </header>
    </div>
  );
}

export default App;
