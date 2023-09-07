// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context.jsx'; // Asegúrate de importar el contexto

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme}>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/favs">Favoritos</a></li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar;
