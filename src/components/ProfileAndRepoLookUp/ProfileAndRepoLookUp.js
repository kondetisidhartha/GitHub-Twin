import React from "react";
import Profile from "../ProfileAndRepoLookUp/Profile/Profile";
import RepoLookUp from "../ProfileAndRepoLookUp/RepoLookUp/RepoLookUp";
import classes from "./css/ProfileAndRepoLookUp.module.css";

function ProfileAndRepoLookUp() {
  return (
    <div className={classes.container}>
      <span className={classes.profileContainer}>
        <Profile />
      </span>
      <span className={classes.repoLookUpContainer}>
        <RepoLookUp />
      </span>
    </div>
  );
}

export default ProfileAndRepoLookUp;
