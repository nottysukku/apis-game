import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setUserData(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Random User Profile</h2>
      {userData ? (
        <div>
          <img src={userData.picture.large} alt={userData.name.first} />
          <h3>{userData.name.first} {userData.name.last}</h3>
          <p>{userData.email}</p>
          <p>{userData.location.city}, {userData.location.country}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
