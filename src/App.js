import './App.css';
import Card from "./components/Resume/Card";
import githubLogo from "./assets/github-mark.png";
import linkedinLogo from "./assets/LI-In-Bug.png";
import Header from "./components/Banner/Header";
import styled from "styled-components";
import Resume from "./components/Resume/Resume";
import ProfComponent from './components/Banner/ProfComponent';
import Links from './components/Links/Links';

function App() {

  const data = {
    id: 1,
    title: "Project Management",
    des: "Want to gain real-life experience of managing a complete software project cycle.",
  };
  return (
    <Container>
      <Header/>
      <Links/>
    <Resume />
    </Container>
  );
}

const Container = styled.div`
background: #282c34;`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

export default App;
