import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Posts from './components/Posts';
import SideBar from './components/SideBar';

function App() {
  const secondArticle = 'This is the second article';
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
          <Article name='Tito'>
            <h1>Initial</h1>
          </Article>
          <Article content='First' />
          <Article content={secondArticle} name='Islam'/>
          <Article name='Ahmad'/>
        </div>
      </div>
    </div>
  );
}

export default App;
