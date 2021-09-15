import React from "react";
import "./css/ProfileCard.css";
import { IoPeopleSharp, IoLocation } from "react-icons/io5";
import { RiUserFollowFill, RiTwitterFill } from "react-icons/ri";
import { MdEmail, MdDateRange } from "react-icons/md";
import { ImOffice } from "react-icons/im";

function ProfileCard(props) {
  let fullYear = new Date(props.options.user_since).getFullYear();
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <img src={props.options.avatar} alt="" className="profile-img" />
          <div className="content">
            <div className="sub-content">
              <h1>{props.options.name}</h1>
              <span>@{props.options.username}</span>
              <p>{props.options.bio}</p>
              <span className="location">
                {<IoLocation />} {props.options.location}
              </span>
              <span>
                {<MdEmail />} {props.options.email}
              </span>
              <span>
                {<RiTwitterFill />} {props.options.twitter}
              </span>
              <span>
                {<ImOffice />} {props.options.office}
              </span>
            </div>
            <div className="data">
              <div className="inner-data">
                <p>
                  {<IoPeopleSharp />} {props.options.followers} followers
                </p>
              </div>
              <div className="inner-data">
                <p>
                  {<RiUserFollowFill />} {props.options.following} following
                </p>
              </div>
              <div className="inner-data">
                <p>
                  {<MdDateRange />} Since {fullYear}
                </p>
              </div>
            </div>
            <div className="btn">Edit Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
