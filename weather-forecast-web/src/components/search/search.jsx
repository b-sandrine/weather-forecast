import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions , WEATHER_API_URL, WEATHER_API_KEY} from "../../api";
// eslint-disable-next-line no-unused-vars
import React from "react";
const Search = (onSearchChange) => {
  const [search, setSearch] = useState(null);

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  function handleOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  // eslint-disable-next-line no-redeclare
  function onSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(" ");

    console.log("Latitude is " + lat + " Longitude is " +lon);
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()

      setCurrentWeather({city: searchData.label,...weatherResponse})
      setForecast({city: searchData.label,...forecastResponse})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  console.log("Current weather" + currentWeather + " current forecast " + forecast)

  const loadOptions =  async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      )
      const responseJson = await response.json();
      console.log(responseJson.data)
      const options = responseJson.data.map((item) => ({
        value: `${item.latitude} ${item.longitude}`,
        label: `${item.name} , ${item.countryCode}`,
      }));
      return {
        options,
        hasMore: false, // Set this to true if there are more options to load
      };
    } catch (err) {
      console.log(err);
      return {
        options: [],
        hasMore: false,
      };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="search--box"
    />
  );
};

export default Search;
