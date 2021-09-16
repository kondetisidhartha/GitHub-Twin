import React from "react";
import "./css/RepoCard.css";
import languageColor from "../github-lang-colors.json";
import { FaBalanceScale } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";

function RepoCard(props) {
  // Retireving color from saved json file
  let langColor = "";
  if (languageColor.hasOwnProperty(props.options.language)) {
    langColor = languageColor[props.options.language];
  }

  let license = "";
  if (props.options.repoLicense) {
    const licenseInfo = props.options.repoLicense["name"];
    license = (
      <>
        <span className="icon">{<FaBalanceScale />}</span>
        <small>{licenseInfo}</small>
      </>
    );
  }
  console.log(license);

  // Date formatter
  function get_time_diff(datetime) {
    let oldDate = new Date(datetime);
    let year = oldDate.getFullYear();
    let month = oldDate.toLocaleString("default", { month: "short" });
    let date = oldDate.getDate();

    return "Updated on " + date + "." + month + "." + year;
  }

  let formattedDate = get_time_diff(props.options.updated_at);

  return (
    <div className="repo-card">
      <div className="repo-details">
        <a href="./">{props.options.name}</a>
        {console.log(props.options)}
        <span className="repo-category">
          {props.options.private ? "Private" : "Public"}
        </span>
        {/* Description */}
        <p>{props.options.description}</p>
        {/* Color and language */}
        <div className="repo-bottom-details">
          <div className="repo-meta">
            {props.options.language ? (
              <>
                <span className="color" style={{ background: `${langColor}` }}>
                  &nbsp;
                </span>
                <small>{props.options.language}</small>
              </>
            ) : (
              ""
            )}
            {/* License information */}
            {license}
            {/* Fork information */}
            <span className="icon">{<BiGitRepoForked />}</span>
            <small>{props.options.forks_count}</small>
            {/* Updated on */}
            <span className="icon">{<MdUpdate />}</span>
            <small>{formattedDate}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
