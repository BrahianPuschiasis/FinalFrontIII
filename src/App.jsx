/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// Archivo: App.jsx

import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { ContextProvider } from "./Components/utils/global.context.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Contact from "./Routes/Contact.jsx";
import Favs from "./Routes/Favs.jsx";
import Detail from "./Routes/Detail.jsx";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="favs" element={<Favs />} />
            <Route path="dentist" element={<Detail />} />

          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
