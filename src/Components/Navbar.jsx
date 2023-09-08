/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars


import React, { useContext, useEffect } from 'react';
import { ContextGlobal } from './utils/global.context.jsx';
import '../styles/Navbar.css';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const handleClick = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', state.theme === 'dark');
  }, [state.theme]);

  return (
    <nav className={`navbar ${state.theme}`}>
      <a href="/home" className="brand-link">
        <span className="brand-initial">D</span>H Odonto
      </a>
      <ul className="nav-list">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/favs">Favs</a></li>
      </ul>
      <button onClick={handleClick}>
        {state.theme === 'dark' ? 'Light' : 'Dark'} 
      </button>
    </nav>
  );
}

export default Navbar;
