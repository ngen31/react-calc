import React, { Component } from "react";

import { Button } from "./Button";
import { Input } from "./DisplayField";
import { ClearButton } from "./ClearButton";
import * as math from "mathjs";

import classes from "./Keypad.module.css";

export class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    if (this.state.input !== "") {
      if (this.state.input === "666") {
        this.setState({ input: "DEVIL" });
      } else if (this.state.input === "14081993") {
        this.setState({ input: "HAPPY BIRTHDAY!" });
      } else if (this.state.input === "DEVIL") {
        this.setState({ input: "" });
      } else if (this.state.input === "HAPPY BIRTHDAY!") {
        this.setState({ input: "" });
      } else {
        this.setState({ input: math.evaluate(this.state.input) });
      }
    }
  };

  render() {
    return (
      <div className={classes.keypad}>
        <Input input={this.state.input}></Input>
        <div className={classes.row}>
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className={classes.row}>
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className={classes.row}>
          <ClearButton handleClear={() => this.setState({ input: "" })}>
            Clear
          </ClearButton>
        </div>
      </div>
    );
  }
}
