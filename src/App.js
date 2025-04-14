import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
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
        </div>
      </div>
    </div>
  );
}

export default App;
