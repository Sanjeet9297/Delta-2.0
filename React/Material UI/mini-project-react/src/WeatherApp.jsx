import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WheatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi",
      feelsLike: 24.84,
      temp: 11.73,
      tempMax: 12.05,
      tempMin: 11.73,
      humidity: 81,
      weather: "mist",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Sanjeet</h2>
            <InfoBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            <SearchBox/>
        </div>
    )
}