import React from "react";
import { footerItemsLeft, footerItemsRight } from "./FooterItems";
import classes from "./css/Footer.module.css";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";

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
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* GitHub Logo */}
        <span className={classes.logo}>
          <Link to="./">
            <AiOutlineGithub />
          </Link>
        </span>
        {/* Right of logo items */}
        <ul className={classes.items}>
          {footerItemsRight.map((item) => {
            return (
              <li key={item.id} className={classes.item}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Footer;
