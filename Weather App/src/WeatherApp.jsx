import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Wonderland",
        feels_like: 38.56,
        humidity: 38,
        temp: 36.05,
        tempMax: 36.05,
        tempMin: 36.05,
        weather: "haze",
    })

    let upadateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Abhi</h2>
            <SearchBox updateInfo= {upadateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}