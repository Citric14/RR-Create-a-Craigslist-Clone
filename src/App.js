// Import data
import Gallery from './Gallery';
import searchBar from './searchbar';
// Import components
import './App.css';


function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      {/* <div className='searchbar'>
        <searchBar/>
      </div> */}
      <div className="gallery">
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
