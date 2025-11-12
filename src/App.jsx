import React, { useState, useEffect } from 'react'
import Weather from './components/Weather'
import SetupGuide from './components/SetupGuide'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('London')

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'YOUR_API_KEY_HERE'
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

  useEffect(() => {
    // Only fetch weather if API key is set
    if (API_KEY && API_KEY !== 'YOUR_API_KEY_HERE') {
      fetchWeather(searchCity)
    } else {
      setError('⚠️ Please set your OpenWeatherMap API key in the .env file')
    }
  }, [])

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) return

    // Check if API key is set
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
      setError('⚠️ Please set your OpenWeatherMap API key in the .env file as VITE_WEATHER_API_KEY')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      )

      const data = await response.json()

      if (!response.ok) {
        // Handle different error cases
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your .env file.')
        } else if (response.status === 404) {
          throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`)
        } else if (data.message) {
          throw new Error(data.message)
        } else {
          throw new Error('Unable to fetch weather data. Please try again.')
        }
      }

      setWeatherData(data)
      setCity('')
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      setSearchCity(city)
      fetchWeather(city)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>🌤️ Weather App</h1>
          <p>Get real-time weather information</p>
        </header>

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && (
          <div className="error-message">
            <p>⚠️ {error}</p>
          </div>
        )}

        {(!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') && (
          <SetupGuide />
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {weatherData && !loading && <Weather data={weatherData} />}
      </div>
    </div>
  )
}

export default App

