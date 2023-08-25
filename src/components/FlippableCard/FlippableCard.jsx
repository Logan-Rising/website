import React, { useState } from 'react';
import '../Card/Card.css';
import flipIcon from '../../assets/flip.png';

const FlippableCard = ({ title, description, subDescription1, subDescription2, backText, backgroundImage, imageUrl}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = {
    backgroundImage: backgroundImage,
  };

  return (
    <div className={`card-flip ${isFlipped ? 'flipped' : ''} ${isHovered ? 'hovered' : ''}`} onClick={handleClick} style={cardStyle} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {isHovered && (
        <img
          src={flipIcon}
          alt="Hovered Image"
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            width: '20%',
            height: '20%',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          />
        )}
      { !isFlipped ?
      <div className='image-container'>
        
      <img src={!isFlipped ? imageUrl: undefined} className="card-image" />
      </div> : 
      <div style={{whiteSpace: 'pre-line', textAlign: 'left', justifyContent: 'flex-start'}}>
      <p>{backText}</p>
    </div>
}
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
