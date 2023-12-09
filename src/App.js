import Links from './components/Links/Links';
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Skills from "./components/Skills/Skills"
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div style={{background: '#0F1632'}}>
      <NavigationBar/>
      <Portfolio/>
      <Links/>
      <Experience/>
      <Education/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
