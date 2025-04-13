import React, { useState, useEffect } from "react";
import axios from "axios";

const Dog = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setDogImage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []);

  return (
    <div>
      <h2>Random Dog Image</h2>
      {dogImage ? (
        <div>
          <img src={dogImage} alt="Random Dog" style={{ maxWidth: "100%" }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dog;
