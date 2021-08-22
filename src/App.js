import React, { Component } from "react";
import "./App.css";


import { Keypad } from "./components/Keypad";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Keypad />
      </div>
    );
  }
}
