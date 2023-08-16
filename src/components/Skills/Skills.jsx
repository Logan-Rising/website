import ProgressBarsRow from "../ProgressBar/ProgressBarRow"
import { Slide } from "react-awesome-reveal";

const Skills = () => {
return (
<div id="skills" style={{
      width: '80%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '3rem 0'}}>
<Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Skills
        </h1>
      </Slide>
<ProgressBarsRow progress1={75} progress2={90} label1={'TypeScript'} label2={'JavaScript'}/>
      <ProgressBarsRow progress1={75} progress2={65} label1={'C'} label2={'C++'}/>
      <ProgressBarsRow progress1={60} progress2={80} label1={'Java'} label2={'HTML/CSS'}/>
      </div>
)
}

export default Skills;