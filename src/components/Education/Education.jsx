import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";

import lccc from "../../assets/lccc.png";
import rockets from "../../assets/rockets.png";

const Experience = () => {
  return (
    <Container id="education">
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Education
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            image={rockets}
            imageWidth="47%"
            title="Bachelor Of Computer Science And Engineering "
            company="The University Of Toledo"
            date="August 2018 - August 2023"
            background="#005F9F"
          />
        </Slide>
        <Slide direction="right">
          <Card
            image={lccc}
            imageWidth="30%"
            title="Associate Of Science"
            company="Lorain County Community College"
            date="August 2017 - August 2023"
            background="#005F9F"
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
