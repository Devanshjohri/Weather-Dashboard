import React from 'react';

function ForecastCard({ data }) {
    const { dt_txt, main, weather, wind } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    let day = "Invalid date";
    if (dt_txt){
        const date = new Date(dt_txt);
        if(!isNaN(date.getTime())){
            day = date.toLocaleDateString(undefined, {
                weekday: 'short', 
                day: 'numeric', 
                month:'short'});
        }
        
    }

    return(
        <div className='bg-white dark:bg-gray-800 p-4 rounded text-center shadow w-full sm:w-64 mx-auto rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer'>
            <p className='font-semibold'>{day}</p>
            <img src={iconUrl} alt={weather[0].description} className='mx-auto drop-shadow-md border border-gray-300 rounded-full bg-gray-200 dark:bg-gray-800 dark:border-gray-800'/>
            <p>{main.temp.toFixed(0)}°C</p>
            <p className='text-sm'>{weather[0].main}</p>
            <p className='text-xs'>Humidity: {main.humidity}%</p>
            <p className='text-xs'>Wind: {data.wind.speed} km/h</p>
        </div>
    );
}

export default ForecastCard;