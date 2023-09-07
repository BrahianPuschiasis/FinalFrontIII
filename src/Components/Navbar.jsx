// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context.jsx'; // Asegúrate de importar el contexto
import '../styles/Navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={`navbar ${theme}`}>
      <a href="/home" className="brand-link"><span className="brand-initial">D</span>H Odonto</a>
      <ul className="nav-list">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/favs">Favs</a></li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar;
