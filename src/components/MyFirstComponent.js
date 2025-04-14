export default function MyFirstComponent() {
  const x = 5;

  const person = {
    name: 'Tamim',
    age: 2,
    city: 'Alexandria',
  };

  const elmStyle = {
    backgroundColor: 'black',
    
  };

  return (
    <div>
      <h1 style={elmStyle}>Name: {person.name}</h1>
      <p style={elmStyle}>age: {person.age}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

function handleClick() {
  alert('Hello ');
}
