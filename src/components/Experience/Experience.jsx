import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";

import beckettlogo from "../../assets/beckettcorp.jpg";
import clevelandclinic from "../../assets/clevelandclinic.png";
import universityoftoledo from "../../assets/ut.png";

const Experience = () => {
  return (
    <div id="experience" style={{
      width: '80%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '3rem 0',
    }}>
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Experience
        </h1>
      </Slide>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginTop: '4rem',
          gap: '1rem',
        }}>
        <Slide direction="left">
          <Card
            image={clevelandclinic}
            title={"Unit Support Assistant / Health Unit Coordinator"}
            company={"Cleveland Clinic"}
            date={"June 2017 - January 2021"}
            description={
              `• Communicate with coworkers to complete the job efficiently and maintain a sterile environment

              • Track and move inventory of supplies throughout the unit and other units within the hospital

              • Store patient information in an accessible and organized manner

              • Help patients and their families locate facilities throughout the unit and hospital 

              • Utilize computer programs such as Epic and Watch Child to obtain patient info to track and monitor the safety of patients throughout the units`
            }
            flip={true}
            background='linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'
            imageWidth='34%'
          />
        </Slide>
        <Slide direction="up">
          <Card
            image={beckettlogo}
            title={"Software Engineering Co-op/Intern"}
            company={"R.W. Beckett Corp."}
            date={"August 2022 - December 2022 \n May 2023 - August 2023"}
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
            image={universityoftoledo}
            title={"Academic Industry Immersion Seminar"}
            company={"University Of Toledo"}
            date={"June 2020 - August 2020"}
            description={
              `• Worked with a group of students from the University of Toledo to develop the best design for a hand sanitizer factory in response to the COVID-19 pandemic while following EPA standards

              • Completed online certifications via Lynda/LinkedIn to broaden technical skills such as Python for Students, Advanced Java Programming, and Learning C++

              • Completed KEEN Entrepreneurial Mindset Modules about Lifelong Learning, Learning From Failure, and Developing a Business Plan That Addresses Stakeholder Interests

              • Discovered personality type using the Myers-Briggs Type Indicator and analyzed the results to see how I work best in a team setting`
              
            }
            flip={true}
            background='linear-gradient(159deg, #6E45E1 0%, #89D4CF 100%)'
            imageWidth='28%'
          />
        </Slide>
        </div>
    </div>
  );
};

export default Experience;
