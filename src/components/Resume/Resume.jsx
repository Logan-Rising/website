import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

import beckettlogo from "../../assets/beckettcorp.jpg";
import clevelandclinic from "../../assets/clevelandclinic.png";

const Resume = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Resume
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            image={clevelandclinic}
            title={""}
            description={""}
            flip={true}
            background='linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'
          />
        </Slide>
        <Slide direction="up">
          <Card
            image={beckettlogo}
            title={"Software Engineering Co-op/Intern"}
            company={"R.W. Beckett Corp."}
            description={
              "Test\n" + 
              "Test\n" + 
              "Test"
            }
            flip={true}
            background='linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'
          />
        </Slide>
        <Slide direction="right">
          <Card
            title={""}
            description={``}
            flip={true}
            background='linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Resume;

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
