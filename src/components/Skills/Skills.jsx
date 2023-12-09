import ProgressBarsRow from "../ProgressBar/ProgressBarRow"
import { Slide } from "react-awesome-reveal";

const Skills = () => {
return (
<div id="skills" style={{
      width: '80%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '3rem 0'}}>
<div className="section-header">
      <Slide direction="down">
        <h1 className="section-title">Skills</h1>
        </Slide>
      </div>
<ProgressBarsRow progress1={75} progress2={90} label1={'TypeScript'} label2={'JavaScript'}/>
      <ProgressBarsRow progress1={75} progress2={65} label1={'C'} label2={'C++'}/>
      <ProgressBarsRow progress1={60} progress2={80} label1={'Java'} label2={'HTML/CSS'}/>
      <ProgressBarsRow progress1={75} progress2={50} label1={'Square D PLC Programming'} label2={'C#'}/>
      <ProgressBarsRow progress1={55} progress2={45} label1={'Python'} label2={'x86 Assembly'}/>
      <ProgressBarsRow progress1={45} progress2={90} label1={'ARM Assembly'} label2={'Git'}/>
      <ProgressBarsRow progress1={80} progress2={80} label1={'Google Drive Suite'} label2={'Microsoft Office 365'}/>
      </div>
)
}

export default Skills;