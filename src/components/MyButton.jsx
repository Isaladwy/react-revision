


function MyButton({ name, setName }) {
  function handleClick() {
    setName((prevName) => (prevName === 'Tamim' ? 'Tito' : 'Tamim'));
  }

  return (
    <div style={{margin: '20px'}}>
      <button onClick={handleClick}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
}

export default MyButton;
