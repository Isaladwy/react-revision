import { useState } from 'react';

function MyForm() {
  // const [nameInput, setNameInput] = useState('');
  // const [emailInput, setEmailInput] = useState('');
  const [formData, setFormData] = useState({
    nameInput: '',
    emailInput: '',
    generalInfo: '',
    isStudent: false,
    country: '',
    status: '',
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
          setFormData({ ...formData, nameInput: event.target.value });
        }}
      />
      <br />
      <br />
      <label>Email: </label>
      <input
        type="email"
        value={formData.emailInput}
        onChange={(event) => {
          setFormData({ ...formData, emailInput: event.target.value });
        }}
      />

      <br />
      <br />

      <label>General Info: </label>
      <textarea
        value={formData.generalInfo}
        onChange={(e) => {
          setFormData({ ...formData, generalInfo: e.target.value });
        }}
      >
        {formData.generalInfo}
      </textarea>

      <br />
      <br />
      <label>Are you a student? </label>
      <input
        type="checkbox"
        checked={formData.isStudent}
        onChange={(e) => {
          setFormData({ ...formData, isStudent: e.target.checked });
        }}
      />
      <br />
      <br />
      <select
        value={formData.country}
        onChange={(e) => {
          setFormData({ ...formData, country: e.target.value });
        }}
      >
        <option>KSA</option>
        <option>Egypt</option>
        <option>Qatar</option>
      </select>
      <br />
      <br />
      <div>
        <input
          type="radio"
          name="status"
          value="student"
          checked={formData.status === 'student'}
          onChange={(e) => {
            setFormData({ ...formData, status: e.target.value });
          }}
        />
        Student
        <input
          type="radio"
          name="status"
          value="teacher"
          checked={formData.status === 'teacher'}
          onChange={(e) => {
            setFormData({ ...formData, status: e.target.value });
          }}
        />
        Teacher
      </div>
      <br />
      <button>Submit</button>
      <hr />
    </form>
  );
}

export default MyForm;
