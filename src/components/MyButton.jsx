import React, { useState } from 'react';

function MyButton() {
  const [name, setName] = useState('Tamim');
  return (
    <div style={{margin: '20px'}}>
      <button onClick={handleClick}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );

  function handleClick() {
    setName((prevName) => (prevName === 'Tamim' ? 'Tito' : 'Tamim'));
  }
}

export default MyButton;
