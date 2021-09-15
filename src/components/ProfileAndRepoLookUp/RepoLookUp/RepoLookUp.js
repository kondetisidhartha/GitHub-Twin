import React from "react";
import classes from "./css/RepoLookUp.module.css";
import Input from "../../../UI/Input/Input";
import ButtonGray from "../../../UI/ButtonGray/ButtonGray";
import RepoResults from "../../RepoResults/RepoResult";

function RepoLookUp() {
  return (
    <>
      <form className={classes["form-container"]}>
        <Input
          id="repoInput"
          label="Search"
          type="text"
          value=""
          placeholder="Find a repository..."
        />
        <ButtonGray>Type</ButtonGray>
        <ButtonGray>Language</ButtonGray>
        <ButtonGray>Sort</ButtonGray>
      </form>
      <hr className={classes.separator} />
      <RepoResults />
    </>
  );
}

export default RepoLookUp;
