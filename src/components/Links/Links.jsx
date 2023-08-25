import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/LI-In-Bug.png";
import "../Card/CardContainer.css";

const Links = () => {
  return (
      <div className="card-container" id="links">
        <div className="section-header">
        <Slide direction="down">
        <h1 className="section-title">Find Me On</h1>
        </Slide>
      </div>
      <div className="cards">
        <Slide direction="left">
        <Card
          imageUrl={githubLogo}
          title="Github"
          buttonText={"Github"}
          backgroundColor='white'
          onClick={() => {
            window.open("https://github.com/Logan-Rising", "_blank", "noreferrer");
          }}
        />
        </Slide>
        <Slide direction="right">
        <Card
          imageUrl={linkedinLogo}
          title="LinkedIn"
          buttonText={"LinkedIn"}
          backgroundColor='white'
          onClick={() => {
            window.open("https://www.linkedin.com/in/logan-rising-481759190/", "_blank", "noreferrer");
          }}
        />
        </Slide>
        </div>
      </div>
  );
};

export default Links;
