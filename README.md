# Weather Dashboard

A beautiful, responsive, and abimated weather web app built with **React.js (VITE)**, **Tailwind CSS**,  **Framer Motion**, **Axios**, **Lucide React**, and the **OpenWeatherMap API**.
Users can search for any city and view real-time weather data along with a 5-day forecast.


## Features

* Search any city and get:
    - Current Weather
    - Temperature (°C)
    - Humidity (%)
    - Wind Speed (km/h)
    - Weather Condition with icon
    - Live time display

## 5-Day Forecast
- Day-wise cards with temperature, humidity and wind speed

## Responsive Design
- Mobile and desktop optimized layout

## Animation
- Framer Motion for entrance and transition
- Hover effects on cards(scale, shadow, pointer)

## Theming
- Dark/Light mode toggle

## Error Handling
- Graceful errors for invalid cities or API failure
- Loading animations and UI fallbacks

## Tech Stack
- **React.js (Vite)**
- **Tailwind CSS**
- **Framer Motion**
- **Axios**
- **OpenWeatherMap API**
- **Lucide React**

## Setup Instructions
### 1. Clone the repository
```bash
git clone https://github.com/YourUsername.weather-dashboard.git
cd Weather_Dashboard
```

### 2. Install Dependencies
```bash
npm install
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p
npm install axios framer-motion lucide-react
```

### 3. Add Environment Variable
VITE_WEATHER_API_KEY = Your_OpenWeatherMap_API_KEY

### 4. Run the Project
```bash
npm run dev
```
# Future Improvements
- Auto-fetch current location using Geoloaction API
- Recent search history
- Unit toggle (°C ,<-> °F)
- Weather-based theme animation

# Credits
- OpenWeatherMap API
- Framer Motion
- Tailwind CSS
- React.js
- Lucide React