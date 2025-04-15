import './App.css';
import Article from './components/Article';
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
          <Article />
          <Article name='Islam'/>
          <Article name='Ahmad'/>
        </div>
      </div>
    </div>
  );
}

export default App;
