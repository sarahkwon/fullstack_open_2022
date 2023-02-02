import { useEffect, useState } from 'react'
import axios from 'axios'


const Weather = (props) => {
  const [weather, setWeather] = useState(null)
  const {capital} = props

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setWeather(response.data)
        
    })

}, [])

  if (weather === null) {
    return null
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature {weather.main.temp} Fahrenheit</p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather