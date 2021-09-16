import React, { useEffect, useState } from "react";
import ProfileCard from "../../../UI/ProfileCard/ProfileCard";
import useHttp from "../../hooks/use-http";
import classes from "./css/Profile.module.css";

function Profile(props) {
  const [profile, setProfile] = useState([]);
  const { sendRequest: profileRequest } = useHttp();

  const transformProfile = (setFunction, responseData) => {
    const loadedProfile = [];

    loadedProfile.push({
      id: responseData.id,
      avatar: responseData.avatar_url,
      username: responseData.name,
      email: responseData.email,
      company: responseData.company,
      name: responseData.login,
      bio: responseData.bio,
      followers: responseData.followers,
      following: responseData.following,
      location: responseData.location,
      user_since: responseData.created_at,
    });

    setFunction(loadedProfile);
  };

  useEffect(() => {
    profileRequest(
      {
        url: `https://api.github.com/users/afc163`,
      },
      transformProfile.bind(null, setProfile)
    );
  }, [profileRequest]);

  return (
    <div className={classes.container}>
      {profile.map((profile) => {
        return <ProfileCard key={profile.id} options={profile} />;
      })}
    </div>
  );
}

export default Profile;
