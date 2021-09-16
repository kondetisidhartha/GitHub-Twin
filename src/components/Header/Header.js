import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./css/Header.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import { headerItems } from "./HeaderItems";
import Button from "../../UI/Button/Button";
import { BiChevronDown } from "react-icons/bi";

// Simple header component

function Header(props) {
  const [searchUser, setSearchUser] = useState("");

  // Update user search to input
  const searchUserChangeHandler = (event) => {
    setSearchUser(event.target.value);
  };

  // If user press Enter key, search for user repos
  const searchUserKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      props.onChange(event.target.value);
      setSearchUser("");
    }
  };

  return (
    <>
      <nav className={classes.header}>
        <ul className={classes.items}>
          <Link to="/" className={classes.logo}>
            <AiOutlineGithub />
          </Link>
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

        <div className={classes.item}>
          <div className={classes["search-user"]}>
            <input
              className={classes["header-input"]}
              placeholder="Search user..."
              type="text"
              value={searchUser}
              onChange={searchUserChangeHandler}
              onKeyDown={searchUserKeyDownHandler}
            />
          </div>
          <a href="https://github.com/login">Sign in</a>
          <Button href="https://github.com/signup">Sign up</Button>
        </div>
      </nav>
    </>
  );
}

export default Header;
