import Header from "./components/Banner/Header";
import ProfComponent from './components/Banner/ProfComponent';
import Links from './components/Links/Links';
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div style={{background: '#282c34'}}>
      <NavigationBar/>
      <Links/>
      <Experience/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
