import React from "react";
import classes from "./css/RepoLookUp.module.css";
import Input from "../../../UI/Input/Input";
import ButtonGray from "../../../UI/ButtonGray/ButtonGray";
import RepoResults from "../../RepoResults/RepoResults";

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
          onChangeHandler={() => console.log("Change")}
        />
        <ButtonGray>Type</ButtonGray>
        <ButtonGray>Language</ButtonGray>
        <ButtonGray>Sort</ButtonGray>
      </form>
      <RepoResults />
    </>
  );
}

export default RepoLookUp;
