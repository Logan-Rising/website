import ProgressBar from "./ProgressBar";

const ProgressBarsRow = ({ progress1, progress2, label1, label2 }) => {
    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      width: '90%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '3rem 0'
    };

    console.log('label1 && progress1: ' + label1 && progress1)
  
    return (
      <div style={rowStyle}>
        <ProgressBar progress={progress1} label={label1} />
        <ProgressBar progress={progress2} label={label2} />
      </div>
    );
  };

  export default ProgressBarsRow;