// Import data
import Gallery from './Gallery';
import Sidebar from './Sidebar';
// Import components
import './App.css';


function App(){
  return (
    <div className='App'>
      <h1>Craigslist</h1>
      {/* <div className='searchbar'>
        <searchBar/>
      </div> */}
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className="gallery">
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
