import React, { useState, useEffect } from 'react';
import './Portfolio.css'; // You can create this CSS file for styling
import PortfolioPic from '../../assets/portfolio-pic.jpg';

const Portfolio = ({  }) => {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  useEffect(() => {
    const handleResize = () => {
      // Update font size based on screen width
      const newFontSize = Math.max(10, Math.min(window.innerWidth / 30, 30));
      setFontSize(newFontSize);
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="portfolio-image-with-text-container" id="home">
      <div className="portfolio-text-container">
        <h1 className="portfolio-sub-text-style" style={{color:"white", fontSize:fontSize}}>Welcome To My Website!</h1>
        <div style={{display:"inline"}}>
        <span className="portfolio-text-style" style={{color:"white", fontSize:fontSize}}>Hi, I'm </span>
        <span className="portfolio-text-style" style={{color:"#fc044c", fontSize:fontSize}}>Logan Rising</span>
        </div>
        <h1 className="portfolio-sub-text-style" style={{color:"white", fontSize:fontSize}}>I'm a recent graduate of The University of Toledo in Computer Science and Engineering 
        with experience writing in multiple different languages.  I am pursuing a role where I can enhance and utilize 
        the skills I have acquired throughout my education and past experiences.</h1>
      </div>
      <div className="portfolio-image-container">
        <img src={PortfolioPic} alt="Content" className="portfolio-image" />
      </div>
    </div>
  );
};

export default Portfolio;







