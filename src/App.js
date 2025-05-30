import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import MyButton from './components/MyButton';
import MyForm from './components/MyForm';
import MyInput from './components/MyInput';
import Posts from './components/Posts';
import SideBar from './components/SideBar';
import { useState } from 'react';

const showArticle = true;
const secondArticle = 'This is the second article';
function App() {
  const [name, setName] = useState('Tamim');

  const [count, setCount] = useState(0);

  const [deviceInput, setDeviceInput] = useState('');
  const [devices, setDevices] = useState([
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Xiaomi' },
    { id: 4, name: 'Nokia' },
    { id: 5, name: 'Oppo' },
  ]);
  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{' '}
        <button
          onClick={() =>
            setDevices(devices.filter((item) => item.id !== device.id))
          }
        >
          delete
        </button>
        <button
          onClick={() => {
            setDevices(
              devices.map((item) =>
                item.id === device.id
                  ? {
                      ...item,
                      name: prompt('Enter new name:', item.name) || item.name,
                    }
                  : item
              )
            );
          }}
        >
          edit
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <Header />
      <br />
      <hr />
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            setCount((c) => c + 1);
            setCount((c) => c + 1);
          }}
        >
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <br />
      <hr />
      <MyButton name={name} setName={setName} />
      <MyInput name={name} setName={setName} />
      <br />
      <hr />
      <div>
        {devicesList}
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            value={deviceInput}
            onChange={(e) => {
              setDeviceInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // const newDevices = [...devices];
              // newDevices.push(deviceInput);
              // setDevices(newDevices);
              setDevices([
                ...devices,
                { id: devices.length + 1, name: deviceInput },
              ]);
              setDeviceInput('');
            }}
          >
            Add
          </button>
        </div>
      </div>
      <br />
      <MyForm />
      <div className="main-container">
        <div className="posts-container">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div className="sidebar-container">
          <SideBar />
          {showArticle && <AppArticle />}
        </div>
      </div>
    </div>
  );
}

function AppArticle() {
  return (
    <>
      <Article name="Tito">
        <h1>Initial</h1>
      </Article>
      <Article content="First" />
      <Article content={secondArticle} name="Islam" />
      <Article name="Ahmad" />
    </>
  );
}
export default App;
