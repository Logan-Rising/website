import React from "react";
import styled from "styled-components";
import FlippableCard from "../FlippableCard/FlippableCard";
import { Slide } from "react-awesome-reveal";

import lccc from "../../assets/lccc.png";
import rockets from "../../assets/rockets.png";

const Education = () => {
  return (
    <div className="card-container" id="education">
      <div className="section-header">
      <Slide direction="down">
        <h1 className="section-title">Education</h1>
        </Slide>
      </div>
      <div className="cards">
        <Slide direction="left">
          <FlippableCard
            imageUrl={rockets}
            title={"Bachelor Of Computer Science And Engineering"}
            subDescription1={"The University Of Toledo"}
            subDescription2={"August 2018 - August 2023"}
            backText={
              `GPA: 3.409                                                             

              • Related coursework: 
              • Object Oriented Programming
              • Professional Development
              • Linear Structures
              • Digital Logic Design
              • Computer Architecture and Organization
              • Electric Circuits
              • Signals and Systems
              • Electronics
              • Non-Linear Data Structures
              • Data Communications
              • Embedded Systems
              • Operating Systems and Systems Programming
              • Software Engineering
              • Theory of Computation
              • Senior Design I, II
              • Database Management Systems
              • Advanced Systems Programming
              • Programmable Logic Controllers`
            }
            backgroundImage={'linear-gradient(190deg, #FFA500 0%, #FFFF00 100%)'}
          />
        </Slide>
        <Slide direction="right">
          <FlippableCard
            imageUrl={lccc}
            title="Associate Of Science"
            subDescription1="Lorain County Community College"
            subDescription2="August 2017 - August 2023"
            backText={
              `GPA: 3.739
              
              • Calculus I, II, III
              • Physics I, II
              • Engineering Statistics
              `
            }
            backgroundImage={'linear-gradient(190deg, #FFA500 0%, #FFFF00 100%)'}
          />
        </Slide>
      </div>
    </div>
  );
};

export default Education;
