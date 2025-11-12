# Weather Application 🌤️

A modern, responsive weather application built with React.js that provides real-time weather information for any city worldwide.

## Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature and weather conditions
- 📊 Detailed weather information (humidity, wind speed, pressure, etc.)
- 📱 Fully responsive design
- 🎨 Beautiful and modern UI
- ⚡ Fast and lightweight

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **OpenWeatherMap API** - Weather data
- **CSS3** - Styling with modern gradients and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Project4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Create a `.env` file in the root directory:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
Project4/
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## API Setup (REQUIRED - Takes 2 minutes!)

**You MUST set up an API key for the app to work!**

### Quick Setup:

1. **Get Free API Key:**
   - Visit: https://openweathermap.org/api
   - Click "Sign Up" and create a free account
   - Verify your email
   - Go to: https://home.openweathermap.org/api_keys
   - Click "Create" to generate your API key
   - Copy the key

2. **Add to Project:**
   - Open the `.env` file in the project root
   - Replace the placeholder with your key:
     ```
     VITE_WEATHER_API_KEY=your_actual_api_key_here
     ```
   - Save the file

3. **Restart Server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

4. **Wait for Activation:**
   - New keys take 10-60 minutes to activate
   - Be patient if you see "Invalid API key" error initially

📖 **Detailed instructions:** See `SETUP_GUIDE.md` for step-by-step guide with screenshots.

## Usage

1. Enter a city name in the search box
2. Click "Search" or press Enter
3. View the current weather information for that city

## License

This project is open source and available under the MIT License.

