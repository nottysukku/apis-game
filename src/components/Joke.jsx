import React, { useState, useEffect } from "react";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + " - " + response.data.punchline);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
      });
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
