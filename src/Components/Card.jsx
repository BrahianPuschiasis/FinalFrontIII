// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, username, id }) => {
  console.log(username);
  return (
  
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number
};

export default Card;
