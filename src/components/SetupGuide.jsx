import React from 'react'
import './SetupGuide.css'

const SetupGuide = () => {
  return (
    <div className="setup-guide">
      <div className="guide-header">
        <h2>🔑 API Key Setup Required</h2>
        <p>Get your free OpenWeatherMap API key in just 2 minutes!</p>
      </div>

      <div className="guide-steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Sign Up for Free</h3>
            <p>Visit OpenWeatherMap and create a free account</p>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-link"
            >
              🌐 Go to OpenWeatherMap →
            </a>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Get Your API Key</h3>
            <p>After signing up, go to "API keys" section and generate a new key</p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Add to .env File</h3>
            <p>Open the <code>.env</code> file in your project root and add:</p>
            <div className="code-block">
              <code>VITE_WEATHER_API_KEY=your_api_key_here</code>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Restart Server</h3>
            <p>Stop the dev server (Ctrl+C) and run <code>npm run dev</code> again</p>
          </div>
        </div>
      </div>

      <div className="guide-note">
        <p>💡 <strong>Note:</strong> New API keys may take 10-60 minutes to activate. Be patient!</p>
      </div>
    </div>
  )
}

export default SetupGuide


