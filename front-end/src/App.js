import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./containers/Login.js";
import { Header } from "./containers/Header";
import Registration from "./containers/Registration";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h2>Login</h2>
        <Login />
        <Registration />
      </header>
    </div>
  );
};

export default App;