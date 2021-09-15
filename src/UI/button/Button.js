import React from "react";
import classes from "./css/Button.module.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="signup">
      <button className={classes.btn}>Sign up</button>
    </Link>
  );
}

export default Button;
