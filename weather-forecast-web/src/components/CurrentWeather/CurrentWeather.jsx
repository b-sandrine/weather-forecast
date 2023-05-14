/* eslint-disable react/prop-types */
import "./CurrentWeather.css";
import { MdSunny } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export default function CurrentWeather({data}) {
  console.log(data)
  return (
    <div>
      <div className="weather--details">
        <div className="text--upper">
          <p className="location">{data.city}</p>
          <p className="temperature"> &#176;C</p>
          <div className="weather--status">
            {" "}
            <p>{data.weather[0].description}</p> <MdSunny className="icon" />{" "}
          </div>
        </div>
        <div className="text--medium">
          <p className="humidity">Humidity: 40%</p>
          <p className="wind--speed">Wind Speed: {data.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
}
