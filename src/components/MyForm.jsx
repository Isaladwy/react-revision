import { useState } from 'react';

function MyForm() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Name:', nameInput);
        console.log('Email:', emailInput);
      }}
    >
      <hr />
      <h2>My Form</h2>
      <label>Name: </label>
      <input
        type="text"
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      />
      <br />
      <br />
      <label>Email: </label>
      <input
        type="email"
        value={emailInput}
        onChange={(event) => {
          setEmailInput(event.target.value);
        }}
      />

      <br />
      <br />
      <button>Submit</button>
      <hr />
    </form>
  );
}

export default MyForm;
