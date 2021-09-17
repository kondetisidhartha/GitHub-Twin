import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/StickyHeader.module.css";
import { BiBookOpen, BiBookBookmark, BiPackage } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

function StickyHeader(props) {
  // username prop is passed from parent <App/>
  const [totalRepos, setTotalRepos] = useState(0);

  // Total number of repositories using default fetch api only once when component called
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.userName}/repos`)
      .then((response) => response.json())
      .then((data) => updateTotalRepos(data.length));
  }, [props.userName]);

  const updateTotalRepos = (length) => {
    setTotalRepos(length);
  };

  // Using NavLink to style active tab than <a> and <Link>
  return (
    <div className={classes.container}>
      <div className={classes.profileColumn}></div>
      <div className={classes.repoColumn}>
        <NavLink to="/overview" activeClassName={classes.activeTab}>
          <BiBookOpen /> Overview
        </NavLink>
        <NavLink to="/" activeClassName={classes.activeTab} exact={true}>
          <BiBookBookmark />
          Repositories{" "}
          <span className={classes["repo-count"]}>{totalRepos}</span>
        </NavLink>
        <NavLink to="/projects" activeClassName={classes.activeTab}>
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
