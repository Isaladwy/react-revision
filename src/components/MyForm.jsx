import { useState } from "react";

function MyForm() {
  const [nameInput, setNameInput] = useState('');
  return (
    <form>
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
      <input type="email" />

      <br />
      <br />
      <button>Submit</button>
      <hr />
    </form>
  );
}

export default MyForm;
