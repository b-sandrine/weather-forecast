
import './App.css'
import sun from './assets/sun-dynamic-color.png'
// import Search from './components/Search/Search'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import Search from './components/search/search'

function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log("The data is " + searchData)
  } 

  return (
    <div className='container'>
      <img src={sun} alt="sun image" />
      <div className="weather--part">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather />
      </div>
    </div>
  )
}

export default App
