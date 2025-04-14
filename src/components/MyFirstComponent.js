export default function MyFirstComponent() {
  const x = 5;

  const person = {
    name: 'Tamim',
    age: 2,
    city: 'Alexandria',
  };

  const eleStyle = {
    backgroundColor: 'black',
    
  };

  return (
    <div>
      <h1 style={eleStyle}>Name: {person.name}</h1>
      <p>age: {person.age}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

function handleClick() {
  alert('Hello ');
}
