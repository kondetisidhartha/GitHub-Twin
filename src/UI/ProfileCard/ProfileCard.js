import React from "react";
import classes from "./css/ProfileCard.module.css";
import { IoPeopleSharp, IoLocation } from "react-icons/io5";
import { RiUserFollowFill, RiTwitterFill } from "react-icons/ri";
import { MdEmail, MdDateRange } from "react-icons/md";
import { ImOffice } from "react-icons/im";

// UI card to showcase user profile with avatar
function ProfileCard(props) {
  // Converting String timeformat to get Year for "since" tag in profile
  let fullYear = new Date(props.options.user_since).getFullYear();
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <img
            src={props.options.avatar}
            alt=""
            className={classes["profile-img"]}
          />
          <div className={classes.content}>
            <div className={classes["sub-content"]}>
              <h1>{props.options.name}</h1>
              <span>@{props.options.username}</span>
              <p>{props.options.bio}</p>
              <span className={classes.location}>
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
            <div className={classes.data}>
              <div className={classes["inner-data"]}>
                <p>
                  {<IoPeopleSharp />} {props.options.followers} followers
                </p>
              </div>
              <div className={classes["inner-data"]}>
                <p>
                  {<RiUserFollowFill />} {props.options.following} following
                </p>
              </div>
              <div className={classes["inner-data"]}>
                <p>
                  {<MdDateRange />} Since {fullYear}
                </p>
              </div>
            </div>

            <a className={classes.follow} href="https://github.com/login">
              <div className={classes.btn}>Follow</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
