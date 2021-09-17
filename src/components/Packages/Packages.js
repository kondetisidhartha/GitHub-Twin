import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./css/Packages.module.css";

function Packages() {
  return (
    <div className={classes.container}>
      <Card>
        <h2 className={classes.heading}>Packages Page</h2>
      </Card>
    </div>
  );
}

export default Packages;
