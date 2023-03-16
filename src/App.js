
// import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from './components/Modals';
import CocktailSearch from './components/CocktailSearch';


function App() {

  
  return (
    <>
    <div className="header" >
      <p className="headerText">Shake It Up</p>
    </div>
    <div className='content'>
      <CocktailSearch />
    </div>
    
      <Modals />
 
    </>
  );
}

export default App;
