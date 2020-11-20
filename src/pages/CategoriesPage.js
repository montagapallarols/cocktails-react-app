import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>All Categories</h1>
      {categories.map(c => {
        return <div>
          <p>{c.strCategory}</p>
        </div>
      })}
    </div>
  );
}
