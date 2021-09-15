import React from "react";
import classes from "./css/Input.module.css";

// Input field used at main page to take user input and show repos .
const Input = (props) => {
  return (
    <div className={classes.container}>
      <input
        className={classes["search-input"]}
        type={props.type}
        id={props.id}
        onChange={props.onChangeHandler}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
