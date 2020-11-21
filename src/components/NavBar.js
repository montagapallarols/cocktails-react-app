import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <NavLink className="nav" exact to="/" activeStyle={{ fontWeight: "bold" }}>
        Home {true}
      </NavLink>
      <NavLink className="nav" exact to="/categories" activeStyle={{ fontWeight: "bold" }}>
        Categories{" "}
      </NavLink>
      <NavLink className="nav" exact to="/discover" activeStyle={{ fontWeight: "bold" }}>
        Discover
      </NavLink>
    </div>
  );
}
