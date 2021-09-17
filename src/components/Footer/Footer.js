import React from "react";
import { footerItemsLeft, footerItemsRight } from "./FooterItems";
import classes from "./css/Footer.module.css";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";

// Default basic footer for all components
function Footer() {
  return (
    <>
      <hr className={classes.separator} />
      <div className={classes.footer}>
        {/* Copyright */}

        {/* Left of logo items */}
        <ul className={classes.items}>
          <span className={classes.item}>&#169; 2021 GitHub, Inc.</span>
          {footerItemsLeft.map((item) => {
            return (
              <li key={item.id} className={classes.item}>
                <a href={item.path} target="_blank">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* GitHub Logo */}
        <span className={classes.logo}>
          <a href="https://github.com/" target="_blank">
            <AiOutlineGithub />
          </a>
        </span>
        {/* Right of logo items */}
        <ul className={classes.items}>
          {footerItemsRight.map((item) => {
            return (
              <li key={item.id} className={classes.item}>
                <a href={item.path} target="_blank">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Footer;
