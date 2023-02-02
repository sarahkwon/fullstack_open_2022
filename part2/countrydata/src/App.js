import { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar.js'
import SearchResult from './components/SearchResult.js'
import axios from 'axios'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

  
  useEffect(() => {
      axios
        .get(`https://restcountries.com/v2/all`)
        .then(response => {
          setAllCountries(response.data)
        })
  }, []) 

  useEffect(() => {
    const filter = () => allCountries.filter(country => 
      country.name.toLowerCase().includes(searchInput.toLowerCase()))
    
    setCountries(filter)

  }, [searchInput, allCountries])

  const handleSearchInputChange = (event) => setSearchInput(event.target.value)

  
  
  return (
    <div>
      <Searchbar 
        text={"Find countries: "} 
        searchInput={searchInput} 
        handleSearchInputChange={handleSearchInputChange}
      />
      <SearchResult countries={countries} searchInput={searchInput}/>

    </div>
  );
}

export default App;
