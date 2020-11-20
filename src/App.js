import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import DiscoverPage from "./pages/DiscoverPage";
import CocktailDetails from "./components/CocktailDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className="nav" />
        <h1>Cocktail Explorer</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/discover" component={DiscoverPage} />
        <Route exact path="/cocktail/:idDrink" component={CocktailDetails} />
      </Switch>
    </div>
  );
}

export default App;
