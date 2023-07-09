import React from "react";

import "./Card.css";

export const Card = ({
  imgSrc,
  title,
  description,
  buttonText,
  link,
}) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="card-container">
      {imgSrc && (
        <img src={imgSrc} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <button
        role="link"
        onClick={() => openInNewTab(link)}
        className="card-btn"
        >
        Visit
        </button>
      )}
    </div>
  );
};
