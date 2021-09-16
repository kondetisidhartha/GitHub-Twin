import React from "react";
import classes from "./css/ButtonGray.module.css";
import { Link } from "react-router-dom";

function ButtonGray(props) {
  return (
    <Link to="/">
      <button className={classes.btn}>{props.children}</button>
    </Link>
  );
}

export default ButtonGray;
