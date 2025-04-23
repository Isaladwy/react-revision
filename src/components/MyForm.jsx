import { useState } from 'react';

function MyForm() {
  // const [nameInput, setNameInput] = useState('');
  // const [emailInput, setEmailInput] = useState('');
  const [formData, setFormData] = useState({
    nameInput: '',
    emailInput: '',
    generalInfo: '',
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formData);
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
          setFormData({ ...setFormData, emailInput: event.target.value });
        }}
      />

      <br />
      <br />

      <label>General Info: </label>
      <textarea
        onChange={(e) => {
          setFormData({ ...setFormData, generalInfo: e.target.value });
        }}
      >
        {formData.generalInfo}
      </textarea>

      <br />
      <br />
      <button>Submit</button>
      <hr />
    </form>
  );
}

export default MyForm;
