import { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';

function CocktailSearch() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [containerStyle, setContainerStyle] = useState(false);
    
    

    useEffect(() => {
      
      const fetchData = async () => {
       
        setIsLoading(true);

        try {
          const res = await fetch(
            `https://api.api-ninjas.com/v1/cocktail?name=${searchTerm}`,
            {
              headers: 
              {
                'X-Api-Key': process.env.REACT_APP_ACCESS_KEY
              }
            }
          );
          const data = await res.json();
          setSearchResults(data);
          console.log(data);
         
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
        setContainerStyle(true);
      
      }
      if(searchTerm.length > 0) {
        fetchData();

      }
    }, [searchTerm])
  
return (
 
    <>
<div style={{display: "flex", width: "900px"}}> 

  <div className='container' style={containerStyle ? { height: "605px"} : {height: "105px"}} >
    <div className='search-box'>
      <form>
          {/* <label>Find a Cocktail</label> */}
          <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Find a Cocktail"
          />
      </form>
    </div>

      {error && <div>{error.message}</div>}

      {isLoading ? (
        <div>loading ...</div>
        ) : (
        searchResults.map(result => (

            <div key={result.id} className="recipe">
           
              <h3>{result.name}</h3>
              <p>{result.instructions}</p>
              <ul className='cocktail-list'>
                {result.ingredients.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
             </div>
        
        ))
      )}
  </div>
  <ShoppingList />                  
</div>
    </>
)
}
export default CocktailSearch;