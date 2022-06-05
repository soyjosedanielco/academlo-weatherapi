import React from "react"
import './InfoWeather.css'


function InfoWeather({icon, sensation, humidity, pressure, speed, units}) {
  return (
    <section className="InfodWeather">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
        <p>Wind: {speed} {units ? 'km/h' : 'mph'}</p>
        <p>Press: {pressure} hPa</p>
        <p>Humidity: {humidity}%</p>
        <p>Sensation: {parseInt(sensation)}°</p>
    </section>
  )
}

export default InfoWeather