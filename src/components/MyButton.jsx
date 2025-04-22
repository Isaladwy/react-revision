let name = 'Tamim';

function MyButton() {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
}

function handleClick() {
  alert('Hello ' + name);
}

export default MyButton;
