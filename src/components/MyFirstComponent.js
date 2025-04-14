import './FirstComponentStyle.css';

export default function MyFirstComponent() {
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
      <h2 style={elmStyle}>age: {person.age}</h2>
      <h3 className={person.name === 'Tamim' ? 'active redbg' : ''}>
        {person.city}
      </h3>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

function handleClick() {
  alert('Hello ');
}
