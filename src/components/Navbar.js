import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  "counter",
  "dynamicStyles",
  "fetching",
  "filterPeople",
  "simpleForm",
  "todo",
  "zadanieMentor",
  "carousel",
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route}>
            <NavLink to={`/${route}`}>{route}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
