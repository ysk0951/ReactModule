import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './component/route/RouterComponent';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/Spring/api.git')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">{message}</h1>
    //   </header>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
    <div className="App">
      <AppRouter/>
    </div>
  );
}
export default App;
