import React, { useState, useEffect } from "react";
import axios from "axios";

const Cocktail = () => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        setCocktail(response.data.drinks[0]);
      })
      .catch((error) => {
        console.error("Error fetching cocktail data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Random Cocktail Recipe</h2>
      {cocktail ? (
        <div>
          <h3>{cocktail.strDrink}</h3>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <h4>Instructions:</h4>
          <p>{cocktail.strInstructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cocktail;
