export default function MyFirstComponent() {
  const x = 5;

  const person = {
    name: "Tamim",
    age: 2,
    city: "Alexandria",
  };

  return (
    <div>
      <h1>Name: {person.name}</h1>
      <p>age {person.age}</p>
    </div>
  );
}
