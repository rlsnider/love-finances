import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./containers/Login.js";
import { Header } from "./containers/Header";
import Form from "./containers/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h2>Login</h2>
        <Login />
        <Form />
      </header>
    </div>
  );
};

export default App;
