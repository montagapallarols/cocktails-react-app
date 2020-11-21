import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CocktailDetails() {
  const params = useParams();

  const [cocktailDetails, setCocktailDetails] = useState({
    status: "",
    data: [],
  });

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
  // numbers.forEach(e => console.log(`strIngredient${e}`))

  useEffect(() => {
    async function fetchData() {
      console.log("Cocktail data:", cocktailDetails);
      setCocktailDetails({status: "Loading...", data: []})
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`
      );
      console.log("Cocktail data response:", response);
      setCocktailDetails({ status: "", data: response.data.drinks });
    }
    fetchData();
  }, [params.idDrink]);

  console.log("Cocktail details:", cocktailDetails);
  console.log("What are params:", params);

  return (
    <div>
      <p>{cocktailDetails.status}</p>
      {cocktailDetails.data.map(c => {
        return <div key={c.idDrink}>
          <h3>{c.strDrink}</h3>
          <img src={c.strDrinkThumb} alt="cocktail" height="200px"/>
          <p><strong>Category: </strong> {c.strCategory}</p>
          <p><strong>Alcoholic? </strong> {c.strAlcoholic === "Alcoholic" ? "Yes!" : "No!"}</p>
          <p><strong>Glass type: </strong>{c.strGlass}</p>
          <p><strong>Instructions: </strong>{c.strInstructions}</p>
          <strong>Ingredients: </strong>
          <p>{c.strIngredient1}</p>
          <p>{c.strIngredient2}</p>
          <p>{c.strIngredient3}</p>
          <p>{c.strIngredient4}</p>
          <p>{c.strIngredient5}</p>
          <p>{c.strIngredient6}</p>
          <p>{c.strIngredient7}</p>
          <p>{c.strIngredient8}</p>
          <p>{c.strIngredient9}</p>
          <p>{c.strIngredient10}</p>
          <p>{c.strIngredient11}</p>
          <p>{c.strIngredient12}</p>
          <p>{c.strIngredient13}</p>
          <p>{c.strIngredient14}</p>
          <p>{c.strIngredient15}</p>
        </div>
      })}
    </div>
  );
}
