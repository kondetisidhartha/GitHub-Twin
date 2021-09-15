import React from "react";
import classes from "./css/Button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to="signup">
      <button className={classes.btn}>{props.children}</button>
    </Link>
  );
}

export default Button;
