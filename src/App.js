import Links from './components/Links/Links';
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <div style={{background: '#282c34'}}>
      <NavigationBar/>
      <Links/>
      <Experience/>
      <Education/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
