import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

function Profile(props) {
  const [profile, setProfile] = useState([]);
  const { sendRequest: profileRequest } = useHttp();

  const transformProfile = (setFunction, responseData) => {
    const loadedProfile = [];
    console.log(responseData);

    console.log("Inside");
    loadedProfile.push({
      id: responseData.id,
      avatar: responseData.avatar_url,
      username: responseData.name,
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
        url: `https://api.github.com/users/kondetisidhartha`,
      },
      transformProfile.bind(null, setProfile)
    );
  }, [profileRequest]);

  return (
    <>
      {profile.map((profile) => {
        return (
          <>
            <img src={profile.avatar} alt={"Profile"}></img>
            <p>{profile.username}</p>
            <p>{profile.name}</p>
          </>
        );
      })}
    </>
  );
}

export default Profile;
