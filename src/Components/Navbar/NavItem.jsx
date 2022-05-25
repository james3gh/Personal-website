import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "blueviolet" : "",
            borderRadius: isActive ? "15px" : "",
          };
        }}
        to={navItem === "Home" ? `/` : `/${navItem}`}
      >
        {navItem}
      </NavLink>
    </li>
  );
};

export default NavItem;
