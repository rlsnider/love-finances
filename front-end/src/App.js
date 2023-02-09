import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./containers/Login.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Love Finances</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
