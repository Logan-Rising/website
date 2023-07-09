import React from "react";
import styled from "styled-components";
import Card from "../Resume/Card";
import { Slide } from "react-awesome-reveal";
import githubLogo from "../../assets/github logo.png";
import linkedinLogo from "../../assets/LI-Logo.png";

const Links = () => {
  return (
    <Container id="links">
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Find Me On
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
        <Card
          image={githubLogo}
          title="Github"
          description="Find me on Github"
          buttonText={"Github"}
          link="https://github.com/Logan-Rising"
          background='white'
        />
        </Slide>
        <Slide direction="right">
        <Card
          image={linkedinLogo}
          title="LinkedIn"
          description="Find me on LinkedIn"
          buttonText={"LinkedIn"}
          link="https://www.linkedin.com/in/logan-rising-481759190/"
          background='white'
        />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Links;

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
