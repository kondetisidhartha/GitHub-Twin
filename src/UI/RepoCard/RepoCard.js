import React from "react";
import classes from "./css/RepoCard.module.css";

function RepoCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.name}>
        {props.options.name}
        <span className={classes.visibility}>
          {props.options.private ? "Private" : "Public"}
        </span>
      </div>
      <div className={classes.description}>{props.options.description}</div>
      <div className={classes.language}>{props.options.language}</div>
      <div className={classes.fork_count}>{props.options.fork_count}</div>
      <div className={classes.updated_at}>{props.options.updated_at}</div>
    </div>
  );
}

export default RepoCard;
