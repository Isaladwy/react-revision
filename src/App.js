import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Posts from './components/Posts';
import SideBar from './components/SideBar';

const showArticle = true;
const secondArticle = 'This is the second article';
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

function appArticle() {
  return <>
  <Article name='Tito'>
  <h1>Initial</h1>
</Article>
<Article content='First' />
<Article content={secondArticle} name='Islam'/>
<Article name='Ahmad'/>
  </>
}
export default App;
