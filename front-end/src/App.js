import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./containers/Login.js";
import { DefaultHeadingExample } from "./containers/Header";
import Form from "./containers/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DefaultHeadingExample />
        <Login />
        <Form />
      </header>
    </div>
  );
};

export default App;
