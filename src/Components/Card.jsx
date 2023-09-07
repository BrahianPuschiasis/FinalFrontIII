// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import doctorImage from '/images/doctor.jpg'; // Importa la imagen
import '../styles/CardList.css'; // Asegúrate de importar el archivo CSS

const Card = ({ name, username }) => {
  return (
    <div className="card">
      <img src={doctorImage} alt="Doctor" className="doctor-image" /> {/* Añadimos una imagen */}
      <h3>{name}</h3>
      <p>{username}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
