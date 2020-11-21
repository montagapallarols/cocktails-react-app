import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState({
    status: "",
    data: [],
  });

  const [searchBy, setSearchBy] = useState("Ingredient...");

  function onChangeText(event) {
    // console.log(searchText);
    setSearchText(event.target.value);
  }

  async function onClickSearch() {
    console.log("Search for this cocktail:", searchText);
    setSearchStatus({ status: "Searching...", data: [] });

    const response =
      searchBy === "Ingredient..."
        ? await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`
          )
        : await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
          );

    console.log("Got data back:", response);

    if (response.data === "") {
      setSearchStatus({
        status: `Sorry, no matches found for "${searchText}"`,
        data: [],
      });
    } else {
      setSearchStatus({
        status: `Search results for ${searchText}:`,
        data: response.data.drinks,
      });
    }
    setSearchText("");
  }

  function changeSearch(event) {
    console.log("Change search:", event.target.value);
    setSearchBy(event.target.value);
  }

  return (
    <div>
      <p>Welcome to Cocktail Explorer</p>
      <img src="/images/cocktails.jpg" alt="cocktail" height="200px"/>
      {/* <p>
        Go to Categories in the header menu to find a list of all cocktail
        categories.
      </p>
      <p>You can also search for specific cocktails below.</p> */}
      <p>
        <select onChange={changeSearch}>
          <option value="Ingredient...">Search by ingredient</option>
          <option value="Cocktail name...">Search by name</option>
        </select>
      </p>
      <input
        onChange={onChangeText}
        type="text"
        value={searchText}
        placeholder={searchBy}
      ></input>
      <button onClick={onClickSearch}>Search</button>
      <h2>{searchStatus.status}</h2>

      {searchStatus.data.map((cocktail) => {
        // console.log("What's cocktail:", cocktail);
        return (
          <div className="card-container" key={cocktail.idDrink}>
            <div className="cocktail-card">
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <h3>{cocktail.strDrink}</h3>
              </Link>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                height="200px"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

