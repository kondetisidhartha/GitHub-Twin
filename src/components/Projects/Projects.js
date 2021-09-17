import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./css/Projects.module.css";

// Simple Overview page using <Card/>
function Projects() {
  return (
    <div className={classes.container}>
      <Card>
        <h2 className={classes.heading}>Projects Page</h2>
      </Card>
    </div>
  );
}

export default Projects;
