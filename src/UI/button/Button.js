import React from "react";
import classes from "./css/Button.module.css";

function Button(props) {
  return (
    <a href={props.href}>
      <button className={classes.btn}>{props.children}</button>
    </a>
  );
}

export default Button;
