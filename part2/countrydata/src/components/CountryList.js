import CountryInfo from './CountryInfo.js'
import {useState} from 'react'

const Country = (props) => {
  const [displayCountry, setDisplayCountry] = useState(false)
  const {country} = props

  const showCountry = () => {
    setDisplayCountry(!displayCountry)
  }
  

  return (
      <li>
        {country.name}
        <Button handleClick={showCountry} text={displayCountry ? "hide" : "show"}/>
        <CountryInfo country={country} display={displayCountry}/>
      </li>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const CountryList = (props) => {
  const {countries} = props

  return (
    <ul>
      {countries.map(country => 
            <Country key={country.name} country={country}/>
        )}
    </ul>
  )
}

export default CountryList