import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Cocktail Explorer</p>
      <p>
        Go to Categories in the header menu to find a list of all cocktail
        categories.
      </p>
      <p>You can also search for specific cocktails below.</p>
      <input type="text" placeholder="Search for a cocktail..."></input>
      <button>Search</button>
    </div>
  );
}
