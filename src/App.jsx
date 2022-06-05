import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather';
import backgroundImage from './helps/getBackgroundImage'

function App() {
  const [getPosition, setGetPosition] = useState();
  const [isMetric, setIsMetric] = useState(true);
  const [getWeather, setGetWeather] = useState();
  
  useEffect(() => {

    function success(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
  
      setGetPosition({lat, lon});
    }

      navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(getPosition !== undefined) {
      const apiid = '1bfb9a440c25017801671055f5584edf';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${getPosition.lat}&lon=${getPosition.lon}&units=${units}&appid=${apiid}`;

      axios.get(url)
      .then(res => setGetWeather(res.data))
      .catch(error => console.log(error))
    }
  }, [getPosition, isMetric])

  const buttonCondition = () => setIsMetric(!isMetric);
  const units = isMetric ? 'metric' : 'imperial'
  const buttonName = isMetric ? 'F°' : 'C°'

  return (

    <div className="App" style={{ backgroundImage: `url(${backgroundImage(getWeather?.weather[0].description)})`}}>
      {getPosition === undefined
      ?
      <div className="bg-loader">
        <div className="loader"></div>
      </div>
      : 
      getWeather === undefined
      ?
      <div className="bg-loader">
        <div className="loader"></div>
      </div>
      :      
      <header className="App-header">
      <CardWeather 
        name={getWeather?.name}
        temp={getWeather?.main.temp}
        tempMax={getWeather?.main.temp_max}
        tempMin={getWeather?.main.temp_min}
        description={getWeather?.weather[0].description}
        icon={getWeather?.weather[0].icon}
        sensation={getWeather?.main.feels_like}
        humidity={getWeather?.main.humidity}
        pressure={getWeather?.main.pressure}
        speed={getWeather?.wind.speed}
        units={isMetric}
        condition={buttonCondition}
        button={buttonName}
      />
      </header>  
      }
    </div>
  )
}

export default App