import { useState } from 'react';

function MyForm() {
  // const [nameInput, setNameInput] = useState('');
  // const [emailInput, setEmailInput] = useState('');
  const [formData, setFormData] = useState({
    nameInput: '',
    emailInput: '',
    generalInfo
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Name:', formData.nameInput);
        console.log('Email:', formData.emailInput);
      }}
    >
      <hr />
      <h2>My Form</h2>
      <label>Name: </label>
      <input
        type="text"
        value={formData.nameInput}
        onChange={(event) => {
          setFormData({ ...setFormData, nameInput: event.target.value });
        }}
      />
      <br />
      <br />
      <label>Email: </label>
      <input
        type="email"
        value={formData.emailInput}
        onChange={(event) => {
          setFormData({...setFormData, emailInput: event.target.value });
        }}
      />

      <br />
      <br />

      <label>General Info: </label>
      <textarea ></textarea>

      <br />
      <br />
      <button>Submit</button>
      <hr />
    </form>
  );
}

export default MyForm;
