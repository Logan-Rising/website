import React from 'react';
import { useState } from 'react';
import './Card.css';

const Card = ({ imageUrl, title, description, buttonText, backgroundColor, onClick }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || '#fff', // Default background color is white
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`card ${isHovered ? 'hovered' : ''}`} style={cardStyle}
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='image-container'>
      <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <button className="card-button" onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Card;
