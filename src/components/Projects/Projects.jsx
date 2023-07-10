import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";

import lccc from "../../assets/lccc.png";
import rockets from "../../assets/rockets.png";

const Projects = () => {
  return (
    <Container id="projects">
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Projects
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            
          />
        </Slide>
        <Slide direction="right">
          <Card
            
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Projects;

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
