import React, { useState } from "react";
import classes from "./css/RepoLookUp.module.css";
import Input from "../../../UI/Input/Input";
import DropDown from "../../../UI/DropDown/DropDown";
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
        <DropDown options={typeRepos}>Type</DropDown>
        <DropDown options={languagesRepos}>Language</DropDown>
        <DropDown options={updateRepos}>Sort</DropDown>
      </form>
      <RepoResults userName={props.userName} searchRepo={searchRepo} />
    </>
  );
}

export default RepoLookUp;
