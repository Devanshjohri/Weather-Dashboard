import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import { CloudSun } from "lucide-react";
import {motion} from 'framer-motion';


function App() {
  const [city, setCity] = useState('');
  const [weather,  setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);
    setForecast([]);

    try{
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const forecastData = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeather(current.data);

      const daily = forecastData.data.list.filter((_, idx)=> idx % 8 == 0);
      setForecast(daily);
    } 
    catch(err){
      if (err.response?.status == 404){
        setError('City not found. Try another one.');
      }
      else{
        setError('Something went wrong. Try Again Later.');
      }
    }

    finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key == 'Enter') fetchWeather();
  };

  return (
    <div className={`min-h-screen transition bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-10`}>
      <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-4 text-center sm:text-left'>
        <h1 className='text-3xl font-bold'>Weather Dashboard</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded'
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <motion.div        
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{duration: 1}}
        className='text-xl font-bold text-center'
      >
        Start by typing a city to get weather updates
      </motion.div>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col sm:flex-row gap-2 mt-4 mb-6 items-center'>
          <input 
            type='text'
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            className='px-4 py-2 rounded border w-64 dark:bg-gray-800'
          />

          <button
            onClick={fetchWeather}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            Search
          </button>
        </div>
      </div>

      {!weather && (
        <>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center text-gray-700 dark:text-white text-center h-[70vh] px-4"
            >
              <motion.div
                  className="mb-6"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <CloudSun size={80} className="text-yellow-400 animate-pulse" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl   font-bold mb-4">Welcome to Weather Dashboard</h1>

              <p className="text-lg md:text-xl  text-gray-400 max-w-xl">
                Get real-time weather updates, 5-day forecasts, and beautiful animations. Start by entering your city above.
              </p>
            </motion.div>
          </div>
        </>
      )}
      
      <div className='flex flex-col items-center'>

        {loading && <p>Loadding...</p>}
        {error &&<p className='text-red-500'>{error}</p>}

        {weather && (
          <motion.div 
            initial = {{opacity: 0}} 
            animate ={{opacity: 1}} 
            className='mb-6'
          >
            <WeatherCard data={weather} />
          </motion.div>
        )}

        {forecast.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:flex-row md:justify-center md:items-center lg:grid-cols-5 gap-4 px-4'>
                {forecast.map((item, index) => (
                <motion.div
                  key={index}
                  initial = {{y:20, opacity: 0}}
                  animate = {{y:0, opacity: 1}}
                  transition={{ delay: index * 0.1}}
                >
                  <ForecastCard data={item} />
                </motion.div>
              ))}
            </div>
        )}
      </div>
    </div>
  );
}

export default App
