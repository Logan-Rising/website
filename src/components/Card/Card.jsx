import React from 'react';
import './Card.css'; // You can create a CSS file for styling

const Card = ({ imageUrl, title, description, buttonText, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || '#fff', // Default background color is white
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

export default Card;
