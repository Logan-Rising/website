import React from "react";
import styled from "styled-components";
import FlippableCard from "../FlippableCard/FlippableCard";
import { Slide } from "react-awesome-reveal";
import "../Card/CardContainer.css";

import beckettlogo from "../../assets/beckettcorp.jpg";
import clevelandclinic from "../../assets/clevelandclinic.png";
import universityoftoledo from "../../assets/ut.png";

const Experience = () => {
  return (
    <div className="card-container" id="experience">
      <div className="section-header">
      <Slide direction="down">
        <h1 className="section-title">Experience</h1>
        </Slide>
      </div>
      <div className="cards">
        <Slide direction="left">
          <FlippableCard
          imageUrl={clevelandclinic}
            title={"Unit Support Assistant / Health Unit Coordinator"}
            subDescription1={"Cleveland Clinic"}
            subDescription2={"June 2017 - January 2021"}
            backText={
              `• Communicate with coworkers to complete the job efficiently and maintain a sterile environment

              • Track and move inventory of supplies throughout the unit and other units within the hospital

              • Store patient information in an accessible and organized manner

              • Help patients and their families locate facilities throughout the unit and hospital 

              • Utilize computer programs such as Epic and Watch Child to obtain patient info to track and monitor the safety of patients throughout the units`
            }
            backgroundImage={'linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'}
          />
        </Slide>
        <Slide direction="up">
          <FlippableCard
            imageUrl={beckettlogo}
            title={"Software Engineering Co-op/Intern"}
            subDescription1={"R.W. Beckett Corp."}
            subDescription2={"August 2022 - December 2022 \n May 2023 - August 2023"}
            backText={
              `• Web application development using Python with Dash framework

              • Mobile application development built on React Native and Typescript

              • Unit testing utilizing the Jest JavaScript testing framework

              • Product testing including: documentation, procedure, automation, and reliability

              • OTA updating via Bluetooth connections to devices

              • Agile workflow for product designing, development, and deployment
              
              • Gitlab project management for issues, branches, merge requests, etc.
              `
            }
            backgroundImage={'linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'}
          />
        </Slide>
        <Slide direction="right">
          <FlippableCard
            imageUrl={universityoftoledo}
            title={"Academic Industry Immersion Seminar"}
            subDescription1={"University Of Toledo"}
            subDescription2={"June 2020 - August 2020"}
            backText={
              `• Worked with a group of students from the University of Toledo to develop the best design for a hand sanitizer factory in response to the COVID-19 pandemic while following EPA standards

              • Completed online certifications via Lynda/LinkedIn to broaden technical skills such as Python for Students, Advanced Java Programming, and Learning C++

              • Completed KEEN Entrepreneurial Mindset Modules about Lifelong Learning, Learning From Failure, and Developing a Business Plan That Addresses Stakeholder Interests

              • Discovered personality type using the Myers-Briggs Type Indicator and analyzed the results to see how I work best in a team setting`
              
            }
            backgroundImage={'linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'}
          />
        </Slide>
        </div>
        </div>
  );
};

export default Experience;
