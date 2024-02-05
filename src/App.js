import { useState } from "react";
import "./style.css"

function App() {
  const [city, setCity] = useState('')
  const [weatherInfo, setWeatherInfo] = useState(null)

  function getWeather() {
    const api = `http://api.weatherapi.com/v1/current.json?key=ee82add487b041f497d73144240502&q=${city}&aqi=no`

    fetch(api)
      .then((response) => response.json())
      .then((data) => {

        const weather = {
          location: `Weather in ${data.location.name}`,
          temperature: `Temperature: ${data.current.temp_c} C`,
          feelsLike: `Feels Like: ${data.current.feelslike_c}`,
          windSpeed: `Wind Speed: ${data.current.wind_mph} km/h`,
          humidity: `Humidity: ${data.current.humidity}`,
        }
        setWeatherInfo(weather);
      })

      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <>
      <div className="container">
        <header>
        <input type="text" placeholder="Enter city name!" value={city} onChange={(e) => setCity(e.target.value)} className="search-input"/>
        <button onClick={getWeather} className="search-button">Seacrh</button>
        </header>
        {weatherInfo && (
          <div className="info">
            <div className="info-container">
              <h1>{weatherInfo.location}</h1> 
              <p>{weatherInfo.temperature}</p>
              <p>{weatherInfo.feelsLike}</p>
              <p>{weatherInfo.windSpeed}</p>
              <p>{weatherInfo.humidity}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
