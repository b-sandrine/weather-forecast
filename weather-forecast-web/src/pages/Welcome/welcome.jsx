import sun from "../../assets/sun-dynamic-color.png";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Search from "../../components/search/search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api";
import { useState } from "react";
import './welcome.css'

const Welcome = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [forecast, setForecast] = useState(null);

  function handleOnSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(" ");

    console.log("Latitude is " + lat + " Longitude is " + lon);
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="welcome--container">
      <h1> Welcome back, Mr Vincent!</h1>
      <img src={sun} alt="sun image" />
      <div className="weather--part">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </div>
  );
};

export default Welcome;
