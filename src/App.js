
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/celebrity?name=${searchTerm}`,
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
    }
    if(searchTerm.length > 0) {
      fetchData();
    }
  }, [searchTerm])

  return (
    <div>
      <form>
        <label>Search for a K drama star:</label>
        <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        />
      </form>
      {error && <div>{error.message}</div>}

      {isLoading ? (
        <div>loading ...</div>
        ) : (
        searchResults.map(result => (
      
            <div key={result.id}>
            <h2>{result.name}</h2>
            <p>{result.min_height}</p>
            <p>Nepo baby Net worth: {result.net_worth}</p>
            <ul>
              {result.occupation.map(item => (
                <li>{item}</li>
              ))}
            </ul>
      
            </div> 
       
        ))
      )}
    </div>
  );
}

export default App;
