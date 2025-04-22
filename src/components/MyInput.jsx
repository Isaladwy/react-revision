import { useState } from 'react';

function MyInput() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label>Your Name: </label>
      <input type="text" onChange={handleChange} value={inputValue} />
    </div>
  );
}

export default MyInput;
