/* eslint-disable no-unused-vars */
import React from 'react'
import CardList from "../Components/CardList.jsx"; // Asegúrate de importar el componente


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <h1>Home</h1>

      <div className='card-grid'>
      <CardList /> {/* Renderizamos la lista de tarjetas */}
      </div>
    </main>
  )
}

export default Home