import React from "react";
import classes from "./css/ButtonDropDown.module.css";
import { FaAngleDown } from "react-icons/fa";

// Button used next to repo filter search input, (type, sort etc..)
function ButtonDropDown(props) {
  return (
    <div className={classes.container}>
      <div className={classes.tutorial}>
        <ul>
          <li>
            <button className={classes.btn}>
              {props.children}
              {<FaAngleDown />}
            </button>
            <ul>
              {props.options
                ? props.options.map((option) => {
                    return <li key={Math.random()}>{option}</li>;
                  })
                : ""}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ButtonDropDown;
