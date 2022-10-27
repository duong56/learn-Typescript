import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function add(a: number, b: number): number {
    return a + b;
  }

  let sum = add(10, 20);

  console.log(sum);

  function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
      return a * b * c;
    }

    return a * b;
  }

  console.log(multiply(1, 2, 3))

  function multiply(a: number, b?: number, c: number): number {
    if (typeof c !== 'undefined') {
      return a * b * c;
    }
    return a * b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
