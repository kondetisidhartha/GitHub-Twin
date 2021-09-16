import React, { useEffect, useState } from "react";
import RepoCard from "../../UI/RepoCard/RepoCard";
import useHttp from "../hooks/use-http";
import classes from "./css/RepoResults.module.css";

function RepoResults() {
  const [repositories, setRepositories] = useState([]);
  const { sendRequest: repoRequest } = useHttp();

  const transformRepos = (setFunction, responseData) => {
    const loadedRepos = [];
    console.log(responseData);

    for (const id in responseData) {
      loadedRepos.push({
        id: id,
        name: responseData[id].name,
        language: responseData[id].language,
        forks_count: responseData[id].forks_count,
        description: responseData[id].description,
        updated_at: responseData[id].updated_at,
        private: responseData[id].private,
        repoLicense: responseData[id].license,
      });
    }
    setFunction(loadedRepos);
  };

  useEffect(() => {
    repoRequest(
      {
        url: `https://api.github.com/users/Vanguard90/repos`,
      },
      transformRepos.bind(null, setRepositories)
    );
  }, [repoRequest]);

  return (
    <>
      {repositories.map((repo) => {
        return <RepoCard key={repo.id} options={repo} />;
      })}
    </>
  );
}

export default RepoResults;
