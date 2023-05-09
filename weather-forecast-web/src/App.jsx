
import './App.css'
import { MdSearch, MdSunny } from 'react-icons/md'
import sun from './assets/sun-dynamic-color.png'
function App() {
  
  return (
    <div className='container'>
      <img src={sun} alt="sun image" />
      <div className="weather--part">
        <div className="search--box">
          <input type="text" name="" id="" placeholder='Search ...'/>
          <MdSearch className='icon'/> 
        </div>
        <div className="weather--details">
          <div className="text--upper">
            <p className='location'>Azerbaijan, Baku</p>
            <p className='temperature'>13 &#176;C</p>
            <div className='weather--status'> <p>Sunny</p> <MdSunny className='icon'/> </div>
          </div>
          <div className="text--medium">
            <p className='humidity'>Humidity: 40%</p>
            <p className="wind--speed">Wind Speed: 13 km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
