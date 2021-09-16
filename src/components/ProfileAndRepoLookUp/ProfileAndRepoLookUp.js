import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../ProfileAndRepoLookUp/Profile/Profile";
import RepoLookUp from "../ProfileAndRepoLookUp/RepoLookUp/RepoLookUp";
import classes from "./css/ProfileAndRepoLookUp.module.css";
import Overview from "../Overview/Overview";

function ProfileAndRepoLookUp() {
  return (
    <div className={classes.container}>
      <span className={classes.profileContainer}>
        <Profile />
      </span>
      <span className={classes.repoLookUpContainer}>
        <Switch>
          <Route path="/" exact={true}>
            <RepoLookUp />
          </Route>
          <Route path="/overview" exact={true}>
            <Overview />
          </Route>
        </Switch>
      </span>
    </div>
  );
}

export default ProfileAndRepoLookUp;
