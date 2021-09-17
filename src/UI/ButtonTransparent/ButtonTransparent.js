import React from "react";
import classes from "./css/ButtonTransparent.module.css";

// Simple button used in Sign up on Header
function ButtonTransparent(props) {
  return (
    <a href={props.href}>
      <button className={classes.btn}>{props.children}</button>
    </a>
  );
}

export default ButtonTransparent;
