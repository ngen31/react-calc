import React from "react";
import classes from "./Button.module.css";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = (props) => (
  <div
    className={` ${isOperator(props.children) ? classes.btn : classes.btnOp}`}
  onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
