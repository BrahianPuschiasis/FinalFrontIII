// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context.jsx';
import Card from './Card';
import '../styles/CardList.css'; // Asegúrate de importar el archivo CSS


const CardList = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="card-list-container"> {/* Aplicamos la clase card-list */}
      {state.data.map(user => (
        <Card
          key={user.id}
          name={user.name}
          username={user.username}
          id={user.id}
        />
      ))}
    </div>
  );
};

export default CardList;
