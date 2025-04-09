import React from 'react';

function WeatherCard({ data }){
    const { name, main, weather, wind } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const  now = new Date();
    const time = now.toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit', second: '2-digit'});

    return (
        <div className='bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full sm:w-80 text-center mx-auto rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer'>
            <h2 className='text-2xl font-semibold mb-2'>{name}, Today</h2>
            <img src={iconUrl} alt={weather[0].description} className='mx-auto drop-shadow-md border border-gray-300 rounded-full bg-gray-200 dark:bg-gray-800 dark:border-gray-800'></img>
            <p className='text-xl'>{weather[0].main}</p>
            <p className='text-4xl font-bold'>{main.temp}°C</p>
            <p className='text-sm'>Time: {time}</p>
            <div className='mt-4 flex justify-around text-sm text-gray-700 dark:text-gray-300'>
                <div>
                    <p>Humidity</p>
                    <p>{main.humidity}%</p>
                </div>
                <div>
                    <p>Wind</p>
                    <p>{data.wind.speed} km/h</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;