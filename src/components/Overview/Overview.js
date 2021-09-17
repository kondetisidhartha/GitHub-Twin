import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./css/Overview.module.css";

// Simple Overview page using <Card/>
function Overview() {
  return (
    <div className={classes.container}>
      <Card>
        <h2 className={classes.heading}>Overview Page</h2>
      </Card>
    </div>
  );
}

export default Overview;
