# 🔑 Quick API Key Setup Guide

Follow these simple steps to get your Weather App working:

## Step 1: Get Your Free API Key (2 minutes)

1. **Visit OpenWeatherMap:**
   - Go to: https://openweathermap.org/api
   - Click "Sign Up" (top right corner)

2. **Create Account:**
   - Fill in your email, username, and password
   - Check your email and verify your account
   - Log in to your account

3. **Generate API Key:**
   - Once logged in, go to: https://home.openweathermap.org/api_keys
   - Click "Create" or "Generate" to create a new API key
   - Copy the generated API key (it looks like: `abc123def456ghi789...`)

## Step 2: Add API Key to Your Project

1. **Open the `.env` file** in your project root folder
2. **Replace the existing key** with your new API key:
   ```
   VITE_WEATHER_API_KEY=your_new_api_key_here
   ```
   (Replace `your_new_api_key_here` with the key you copied)

3. **Save the file**

## Step 3: Restart the Development Server

1. **Stop the current server:**
   - Press `Ctrl + C` in the terminal where the server is running

2. **Start it again:**
   ```bash
   npm run dev
   ```

3. **Wait for activation:**
   - New API keys may take 10-60 minutes to activate
   - If you get an "Invalid API key" error, wait a bit and try again

## Step 4: Test It!

1. Open your browser to the URL shown (usually `http://localhost:5175`)
2. You should see weather for "London" automatically
3. Try searching for other cities like "New York", "Tokyo", "Paris"

## Troubleshooting

### "Invalid API key" error?
- Wait 10-60 minutes for the key to activate
- Make sure there are no spaces in your `.env` file
- Ensure the format is exactly: `VITE_WEATHER_API_KEY=your_key_here`

### "City not found" error?
- Check the spelling of the city name
- Try using the city name in English
- Some cities may need country code (e.g., "London, UK")

### Still not working?
- Make sure you saved the `.env` file
- Restart the dev server completely
- Check that the `.env` file is in the root directory (same folder as `package.json`)

## Need Help?

- OpenWeatherMap FAQ: https://openweathermap.org/faq
- API Documentation: https://openweathermap.org/api


