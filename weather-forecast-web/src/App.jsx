/* eslint-disable no-unused-vars */
import "./App.css";
import sun from "./assets/sun-dynamic-color.png";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/search/search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import {Routes, Route } from 'react-router'
import Welcome from "./pages/Welcome/welcome";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
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
    <div className="container">
      {/* <img src={sun} alt="sun image" />
      <div className="weather--part">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div> */}
      

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      
    </div>
  );
}

export default App;
