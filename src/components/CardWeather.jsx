import React from "react"
import './CardWeather.css'
import InfoWeather from "./InfoWeather"
import Weather from "./Weather"

function CardWeather({name, temp, tempMax, tempMin, description, condition, button, icon, sensation, humidity, pressure, speed, units}) {
  return (
    <article className="CardWeather">
      <div>
        <Weather 
            name={name}
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            description={description}
        />
        <InfoWeather 
            icon={icon}
            sensation={sensation}
            humidity={humidity}
            pressure={pressure}
            speed={speed}
            units={units}
        />
      </div>
        <p className="button" onClick={condition}>{button}</p>
    </article>
  )
}

export default CardWeather