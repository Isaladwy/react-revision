function MyInput({ name, setName }) {
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <label>Your Name: </label>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default MyInput;
