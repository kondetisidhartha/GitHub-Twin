import React from "react";
import { Link } from "react-router-dom";
import classes from "./css/Header.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import { headerItems } from "./HeaderItems";
import Button from "../../UI/button/Button";
import { BiChevronDown } from "react-icons/bi";

function Header() {
  return (
    <>
      <nav className={classes.header}>
        <Link to="/" className={classes.logo}>
          <AiOutlineGithub />
        </Link>
        <ul className={classes.items}>
          {headerItems.map((item) => {
            return (
              <li key={item.id} className={classes.item}>
                <Link to={item.path}>
                  {item.title}
                  <span className={classes.dropdown}>
                    {item.dropdown ? <BiChevronDown /> : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Header;
