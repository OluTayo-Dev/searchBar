import { useState } from 'react'
import { SearchBar } from './Components/SearchBar';
import { SearchResultList } from './Components/SearchResultList';
import './App.css'

function App() {
  
const [results, setResults] = useState([]);
  return (
    
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultList results={results} />
        </div>
       
      
      </div>
      
    
  )
}

export default App
