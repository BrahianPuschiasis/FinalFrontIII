/* eslint-disable no-unused-vars */
// Archivo: App.jsx

import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/utils/global.context.jsx";
import CardList from "./Components/CardList"; // Asegúrate de importar el componente

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <CardList /> {/* Renderizamos la lista de tarjetas */}
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
