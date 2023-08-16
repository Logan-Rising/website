import React from "react";
import styled from "styled-components";
import FlippableCard from "../FlippableCard/FlippableCard";
import { Slide } from "react-awesome-reveal";

import lccc from "../../assets/lccc.png";
import rockets from "../../assets/rockets.png";

const Experience = () => {
  return (
    <div id="education" style={{
      width: '80%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '3rem 0',
    }}>
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Education
        </h1>
      </Slide>
      <div className="cards">
        <Slide direction="left">
          <FlippableCard
            imageUrl={rockets}
            title="Bachelor Of Computer Science And Engineering "
            subDescription1="The University Of Toledo"
            subDescription2="August 2018 - August 2023"
            backgroundImage={'linear-gradient(190deg, #FFA500 0%, #FFFF00 100%)'}
            backText={
              ``
            }
          />
        </Slide>
        <Slide direction="right">
          <FlippableCard
            imageUrl={lccc}
            title="Associate Of Science"
            subDescription1="Lorain County Community College"
            subDescription2="August 2017 - August 2023"
            backgroundImage={'linear-gradient(190deg, #FFA500 0%, #FFFF00 100%)'}
          />
        </Slide>
      </div>
    </div>
  );
};

export default Experience;
