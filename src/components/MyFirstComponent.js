export default function MyFirstComponent() {
  const x = 5;

  const person = {
    name: "Tamim",
    age: 2,
    city: "Alexandria",
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>Hello World!</h1>
      <p>This is my first component.</p>
    </div>
  );
}
