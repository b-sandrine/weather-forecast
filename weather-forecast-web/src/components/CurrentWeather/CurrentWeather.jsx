import "./CurrentWeather.css";
import { MdSunny } from "react-icons/md";
export default function CurrentWeather() {
  return (
    <div>
      <div className="weather--details">
        <div className="text--upper">
          <p className="location">Azerbaijan, Baku</p>
          <p className="temperature">13 &#176;C</p>
          <div className="weather--status">
            {" "}
            <p>Sunny</p> <MdSunny className="icon" />{" "}
          </div>
        </div>
        <div className="text--medium">
          <p className="humidity">Humidity: 40%</p>
          <p className="wind--speed">Wind Speed: 13 km/h</p>
        </div>
      </div>
    </div>
  );
}
