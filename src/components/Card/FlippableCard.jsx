import React, { useState } from 'react';
import './FlippableCard.css'; // Create this CSS file for styling

const FlippableCard = ({ title, description, subDescription1, subDescription2, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="sub-descriptions">
            <p>{subDescription1}</p>
            <p>{subDescription2}</p>
          </div>
        </div>
        <div className="card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
