const ProgressBar = ({ progress, label }) => {
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '22px',
    color: 'white',
  };

  const barContainerStyle = {
    width: '100%',
    height: '30px',
    backgroundColor: '#ccc',
    borderRadius: '15px',
    position: 'relative',
  };

  const fillerStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: '15px',
  };

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={barContainerStyle}>
        <div style={fillerStyle}>
        </div>
      </div>
    </div>
  );
};

  export default ProgressBar;