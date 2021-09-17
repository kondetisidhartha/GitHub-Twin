import React from "react";
import classes from "./css/Button.module.css";

// Simple button used in Sign up on Header
function Button(props) {
  return (
    <a href={props.href}>
      <button className={classes.btn}>{props.children}</button>
    </a>
  );
}

export default Button;
