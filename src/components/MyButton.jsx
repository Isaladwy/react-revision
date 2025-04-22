function MyButton() {
  let name = 'Tamim';
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

function handleClick() {
  let name = 'Tamim';
  console.log('Hello ' + name);
  alert('Hello ' + name);
}

export default MyButton
