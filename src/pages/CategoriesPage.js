import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function About() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    )
    console.log(response.data)
    setCategories(response.data.drinks)
  }
  fetchData()
  
  }, []);

  console.log(categories)

  return (
    <div>
      <h2>All Categories</h2>
      <img className="categories-image" src="/images/cocktails3.jpg" alt="cocktail" height="130px"/>
      {categories.map(c => {
        return <div key={Math.random()}>
          <Link className="link" to={`/categories/${c.strCategory}`} target="_blank">
          <p>{c.strCategory}</p>
          </Link>
        </div>
      })}
    </div>
  );
}
