import React from "react"
import './Weather.css'

function Weather({name, temp, tempMax, tempMin, description}) {
  return (
    <section className="Weather">
        <p className="Weather-name">{name}</p>
        <p className="Weather-temp">{parseInt(temp)}°</p>
        <p>Max: {parseInt(tempMax)}° Min: {parseInt(tempMin)}°</p>
        <p className="Weather-description">{description}</p>
    </section>
  )
}

export default Weather