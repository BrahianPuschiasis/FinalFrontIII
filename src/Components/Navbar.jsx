/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "./utils/global.context.jsx";
import { Link } from "react-router-dom"; // Importar Link desde react-router-dom
import "../styles/Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const handleClick = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", state.theme === "dark");
  }, [state.theme]);

  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/home" className="brand-link">
        <span className="brand-initial">D</span>H Odonto
      </Link>
      <ul className="nav-list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>

      <button onClick={handleClick}>
        {state.theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
