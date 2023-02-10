import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./containers/Login.js";
import { DefaultHeadingExample } from "./containers/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DefaultHeadingExample />
        <Login />
      </header>
    </div>
  );
}

export default App;
