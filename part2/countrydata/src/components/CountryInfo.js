import Weather from './Weather.js'


const CountryInfo = (props) => {
  const {country, display} = props 

  if (display === false) {
    return null
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag"/>
      <Weather capital={country.capital}/>
    </div>
  )
}

export default CountryInfo