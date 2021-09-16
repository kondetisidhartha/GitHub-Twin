import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/StickyHeader.module.css";
import { BiBookOpen, BiBookBookmark, BiPackage } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

function StickyHeader() {
  return (
    <div className={classes.container}>
      <div className={classes.profileColumn}></div>
      <div className={classes.repoColumn}>
        <NavLink to="./" activeStyle={{ color: "red" }}>
          <BiBookOpen /> Overview
        </NavLink>
        <NavLink to="./" activeStyle={{ color: "red" }}>
          <BiBookBookmark />
          Repositories
        </NavLink>
        <NavLink to="./" activeStyle={{ color: "red" }}>
          <AiOutlineProject />
          Projects
        </NavLink>
        <NavLink to="./" activeStyle={{ color: "red" }}>
          <BiPackage />
          Packages
        </NavLink>
      </div>
    </div>
  );
}

export default StickyHeader;
