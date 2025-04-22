function MyButton() {
  let name = 'Tamim';
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function handleClick() {
  alert('Hello ' + name);
}

export default MyButton;
