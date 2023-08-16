import React, { useState } from 'react';
import '../Card/Card.css';

const FlippableCard = ({ title, description, subDescription1, subDescription2, backText, backgroundImage, imageUrl}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = {
    backgroundImage: backgroundImage,
  };

  return (
    <div className={`card-flip ${isFlipped ? 'flipped' : ''}`} onClick={handleClick} style={cardStyle}>
      <div className='image-container'>
        {!isFlipped ?
      <img src={!isFlipped ? imageUrl: undefined} className="card-image" /> :
      <p style={{whiteSpace: 'pre-line'}}>{backText}</p>
        }
      </div>
      <div className="card-content">
          <div className='card-title-large'><h2>{!isFlipped ? title : ''}</h2></div>
          <p>{!isFlipped ? description : ''}</p>
          <div className="card-description-large">
            <p>{!isFlipped ? subDescription1 : ''}</p>
            <p>{!isFlipped ? subDescription2 : ''}</p>
          </div>
      </div>
    </div>
  );
};

export default FlippableCard;
