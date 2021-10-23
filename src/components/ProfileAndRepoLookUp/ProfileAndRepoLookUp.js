import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../ProfileAndRepoLookUp/Profile/Profile";
import RepoLookUp from "../ProfileAndRepoLookUp/RepoLookUp/RepoLookUp";
import classes from "./css/ProfileAndRepoLookUp.module.css";
import Overview from "../Overview/Overview";
import Packages from "../Packages/Packages";
import Projects from "../Projects/Projects";

// Central component to render profile and repos
// Routing done here using <Switch> and <Route>

// props contain username(if user given, else default)
function ProfileAndRepoLookUp(props) {
  return (
    <div className={classes.container}>
      <span className={classes.profileContainer}>
        <Profile userName={props.userName} />
      </span>
      <span className={classes.repoLookUpContainer}>
        <Switch>
          <Route path="/" exact={true}>
            <RepoLookUp userName={props.userName} />
          </Route>
          <Route path="/overview" exact={true}>
            <Overview />
          </Route>
          <Route path="/projects" exact={true}>
            <Projects />
          </Route>
          <Route path="/packages" exact={true}>
            <Packages />
          </Route>
        </Switch>
      </span>
    </div>
  );
}

export default ProfileAndRepoLookUp;
