import React from "react";
import "./css/RepoCard.css";
import languageColor from "../github-lang-colors.json";

function RepoCard(props) {
  // Retireving color from saved json file
  let langColor = "";
  if (languageColor.hasOwnProperty(props.options.language)) {
    langColor = languageColor[props.options.language];
  }
  return (
    <div className="repo-card">
      <div className="repo-details">
        <a href="./">{props.options.name}</a>

        <span className="repo-category">
          {props.options.private ? "Private" : "Public"}
        </span>
        <p>{props.options.description}</p>
        <div className="repo-bottom-details">
          <div className="repo-meta">
            <small>
              <span className="color" style={{ background: `${langColor}` }}>
                &nbsp;
              </span>
              ˚{props.options.language}
            </small>
            {console.log(props.options.repoLicense)}
            {/* <small>{props.options.repoLicense}</small> */}
            <small>{props.options.fork_count}</small>
            <small>{props.options.updated_at}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
