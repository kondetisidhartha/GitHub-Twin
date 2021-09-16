import React, { useEffect, useState } from "react";
import RepoCard from "../../UI/RepoCard/RepoCard";
import useHttp from "../hooks/use-http";

function RepoResults(props) {
  const [repositories, setRepositories] = useState([]);

  const { sendRequest: repoRequest } = useHttp();

  const transformRepos = (setFunction, responseData) => {
    const loadedRepos = [];

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
        url: responseData[id].svn_url,
      });
    }
    setFunction(loadedRepos);
  };

  useEffect(() => {
    repoRequest(
      {
        url: `https://api.github.com/users/${props.userName}/repos`,
      },
      transformRepos.bind(null, setRepositories)
    );
  }, [repoRequest, props.userName, props.searchRepo]);

  let repos = repositories.map((repo) => {
    return <RepoCard key={repo.id} options={repo} />;
  });

  if (props.searchRepo) {
    repos = repositories.map((repo) => {
      if (repo.name.includes(props.searchRepo)) {
        return <RepoCard key={repo.id} options={repo} />;
      }
    });
  }

  return <>{repos}</>;
}

export default RepoResults;
