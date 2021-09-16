import React, { useState } from "react";
import classes from "./css/RepoLookUp.module.css";
import Input from "../../../UI/Input/Input";
import ButtonGray from "../../../UI/ButtonGray/ButtonGray";
import RepoResults from "../../RepoResults/RepoResults";

function RepoLookUp(props) {
  const [searchRepo, setSearchRepo] = useState("");

  const onInputChangeHandler = (event) => {
    setSearchRepo(event.target.value);
  };

  return (
    <>
      <form className={classes["form-container"]}>
        <Input
          id="repoInput"
          label="Search"
          type="text"
          value={searchRepo}
          placeholder="Find a repository..."
          onInputChangeHandler={onInputChangeHandler}
        />
        <ButtonGray>Type</ButtonGray>
        <ButtonGray>Language</ButtonGray>
        <ButtonGray>Sort</ButtonGray>
      </form>
      <RepoResults userName={props.userName} searchRepo={searchRepo} />
    </>
  );
}

export default RepoLookUp;
