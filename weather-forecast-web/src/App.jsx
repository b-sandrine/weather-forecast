
import './App.css'
import sun from './assets/sun-dynamic-color.png'
import Search from './components/Search/Search'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'

function App() {
  return (
    <div className='container'>
      <img src={sun} alt="sun image" />
      <div className="weather--part">
        <Search />
        <CurrentWeather />
      </div>
    </div>
  )
}

export default App
