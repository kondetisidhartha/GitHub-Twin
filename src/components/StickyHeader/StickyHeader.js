import React from "react";
import { Link } from "react-router-dom";
import classes from "./css/StickyHeader.module.css";
import { BiBookOpen, BiBookBookmark, BiPackage } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

function StickyHeader() {
  return (
    <div className={classes.container}>
      <div className={classes.profileColumn}></div>
      <div className={classes.repoColumn}>
        <Link to="./">
          <BiBookOpen /> Overview
        </Link>
        <Link to="./">
          <BiBookBookmark />
          Repositories
        </Link>
        <Link to="./">
          <AiOutlineProject />
          Projects
        </Link>
        <Link to="./">
          <BiPackage />
          Packages
        </Link>
      </div>
    </div>
  );
}

export default StickyHeader;
