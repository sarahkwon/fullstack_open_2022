import CountryList from './CountryList.js'
import CountryInfo from './CountryInfo.js'


const SearchResult = (props) => {
  const {countries, searchInput} = props


  if (countries.length === 0 || searchInput.length === 0) {
    return null
  }

  if (countries.length === 1) {
    return (
      <div>
        <CountryInfo country={countries[0]} display={true}/>
      </div>
    )
  }

  if (countries.length <= 10) {
    return (
      <div>
        <CountryList countries={countries}/>
      </div>
    )
  }

  else { //too many countries
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
}

export default SearchResult