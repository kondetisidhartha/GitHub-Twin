import React, { useEffect, useState } from "react";
import RepoCard from "../../UI/RepoCard/RepoCard";
import useHttp from "../hooks/use-http";

// Component where API is called to retrieve repos for given username(passed on from <App/>)
function RepoResults(props) {
  const [repositories, setRepositories] = useState([]);

  // Using custom hook useHttp() to call API; Used to make clean code and
  // used at different components as well
  const { sendRequest: repoRequest } = useHttp();

  // useHttp() takes this function to return only required information array
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

  // Used in useEffect(), to call only once when component gets loaded and if there is change
  // username or filter repos
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

  // Since map() returns an array, forEach() doesn't return anything
  if (props.searchRepo) {
    repos = repositories.map((repo) =>
      repo.name.includes(props.searchRepo) ? (
        <RepoCard key={repo.id} options={repo} />
      ) : (
        ""
      )
    );
  }

  return <>{repos}</>;
}

export default RepoResults;
