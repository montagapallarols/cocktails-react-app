import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
        Home {true}
      </NavLink>
      <NavLink exact to="/categories" activeStyle={{ fontWeight: "bold" }}>
        Categories{" "}
      </NavLink>
      <NavLink exact to="/discover" activeStyle={{ fontWeight: "bold" }}>
        Discover
      </NavLink>
    </div>
  );
}
