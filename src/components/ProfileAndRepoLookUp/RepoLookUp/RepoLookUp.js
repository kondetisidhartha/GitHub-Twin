import React, { useState } from "react";
import classes from "./css/RepoLookUp.module.css";
import Input from "../../../UI/Input/Input";
import ButtonDropDown from "../../../UI/ButtonDropDown/ButtonDropDown";
import RepoResults from "../../RepoResults/RepoResults";

// Component to filter retrived repos
function RepoLookUp(props) {
  const [searchRepo, setSearchRepo] = useState("");

  // captures the required repo filter name and updates state
  const onInputChangeHandler = (event) => {
    setSearchRepo(event.target.value);
  };

  // Passed as props to button dropdown for additional filters
  const typeRepos = ["All", "Sources", "Forks", "Archived", "Mirrors"];
  const languagesRepos = ["All", "JavaScript", "HTML", "Python", "C++"];
  const updateRepos = ["Last updated", "Name", "Stars"];

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
        <ButtonDropDown options={typeRepos}>Type</ButtonDropDown>
        <ButtonDropDown options={languagesRepos}>Language</ButtonDropDown>
        <ButtonDropDown options={updateRepos}>Sort</ButtonDropDown>
      </form>
      <RepoResults userName={props.userName} searchRepo={searchRepo} />
    </>
  );
}

export default RepoLookUp;
