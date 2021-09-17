import React from "react";
import classes from "./css/ButtonGray.module.css";
import { FaAngleDown } from "react-icons/fa";

function ButtonGray(props) {
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
                    return <li>{option}</li>;
                  })
                : ""}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ButtonGray;
