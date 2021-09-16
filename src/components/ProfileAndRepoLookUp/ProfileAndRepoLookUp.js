import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../ProfileAndRepoLookUp/Profile/Profile";
import RepoLookUp from "../ProfileAndRepoLookUp/RepoLookUp/RepoLookUp";
import classes from "./css/ProfileAndRepoLookUp.module.css";
import Overview from "../Overview/Overview";

function ProfileAndRepoLookUp(props) {
  return (
    <div className={classes.container}>
      {console.log(props.userName, "Line 11")}
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
        </Switch>
      </span>
    </div>
  );
}

export default ProfileAndRepoLookUp;
