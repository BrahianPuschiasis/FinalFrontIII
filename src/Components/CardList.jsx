// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context.jsx';
import Card from './Card';

const CardList = () => {
  const { state } = useContext(ContextGlobal);
  console.log(state); // Verifica si los datos están disponibles
  console.log("aber");

  return (
    <div className="card-list">
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
