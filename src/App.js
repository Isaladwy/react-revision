import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tamim Aladwy</h1>
        <MyFirstComponent />
      </header>
    </div>
  );
}

function MyFirstComponent() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is my first component.</p>
    </div>
  );
}

export default App;
