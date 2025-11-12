import React from 'react'
import './Weather.css'

const Weather = ({ data }) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  const getDate = () => {
    const today = new Date()
    return today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getTime = () => {
    const today = new Date()
    return today.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="weather-container">
      <div className="weather-header">
        <div className="location">
          <h2>{data.name}</h2>
          <p className="country">{data.sys.country}</p>
        </div>
        <div className="date-time">
          <p className="date">{getDate()}</p>
          <p className="time">{getTime()}</p>
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <div className="icon-temp">
            <img
              src={getWeatherIcon(data.weather[0].icon)}
              alt={data.weather[0].description}
              className="weather-icon"
            />
            <div className="temp">
              <span className="temp-value">{Math.round(data.main.temp)}</span>
              <span className="temp-unit">°C</span>
            </div>
          </div>
          <p className="weather-description">
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
          </p>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{data.wind.speed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{data.main.pressure} hPa</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Min Temp</span>
            <span className="detail-value">
              {Math.round(data.main.temp_min)}°C
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Max Temp</span>
            <span className="detail-value">
              {Math.round(data.main.temp_max)}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather

