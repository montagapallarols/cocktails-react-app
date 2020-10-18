import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className="nav" />
        <h1>Cocktail Explorer</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/discover" component={DiscoverPage} />
      </Switch>
    </div>
  );
}

export default App;
