function MyInput({ setName }) {
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <label>Your Name: </label>
      <input type="text"  onChange={handleChange} />
    </div>
  );
}

export default MyInput;
