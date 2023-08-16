const ProgressBar = ({ progress, label }) => {
  const containerStyle = {
    width: '100%',
    height: '30px',
    backgroundColor: '#ccc',
    borderRadius: '15px',
    position: 'relative',
    marginBottom: '10px',
  };

  const fillerStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: '15px',
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold', fontSize: '20px' }}>
        {label}
      </div>
    </div>
  );
};

  export default ProgressBar;