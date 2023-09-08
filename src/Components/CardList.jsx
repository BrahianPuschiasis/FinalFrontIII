/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context.jsx";
import Card from "./Card";
import { Link } from "react-router-dom"; // Agrega la importación de Link
import "../styles/CardList.css"; // Asegúrate de importar el archivo CSS

const CardList = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="card-list-container">
      {state.data.map((user) => (
        
        <Card
         key={user.id} 
     name={user.name}

    
        id={user.id}
        username={user.username} />

      ))}
    </div>
  );
};


export default CardList;


//          username={user.username}

////  name={
// <Link to={`/dentist/${user.id}`}>
// {user.name}
//  </Link>
//     }
////