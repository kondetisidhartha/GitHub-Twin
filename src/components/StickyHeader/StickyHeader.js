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
        <NavLink to="/overview" activeClassName={classes.activeTab}>
          <BiBookOpen /> Overview
        </NavLink>
        <NavLink to="/" activeClassName={classes.activeTab} exact={true}>
          <BiBookBookmark />
          Repositories <span className={classes["repo-count"]}>10</span>
        </NavLink>
        <NavLink to="./projects" activeClassName={classes.activeTab}>
          <AiOutlineProject />
          Projects
        </NavLink>
        <NavLink to="/packages" activeClassName={classes.activeTab}>
          <BiPackage />
          Packages
        </NavLink>
      </div>
    </div>
  );
}

export default StickyHeader;
