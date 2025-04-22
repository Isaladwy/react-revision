function MyInput() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <label>Your Name: </label>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default MyInput;
