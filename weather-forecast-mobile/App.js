import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AppLoading from 'expo-app-loading'
import Body from "./scr/components/Body/body";
import Footer from "./scr/components/Footer/footer";
import SearchBox from "./scr/components/Search/search";
import { GEO_API_URL,geoApiOptions , WEATHER_API_KEY, WEATHER_API_URL } from "./api";

const fetchFonts = async () => {
  await Font.loadAsync({
    'inter-regular': require('./assets/inter/Inter-Bold.ttf'),
    'inter-bold': require('./assets/inter/Inter-Regular.ttf'),
    });
};

export default function App() {
  
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  const searchCities = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      )
      
      const responseJSON = await response.json();
      console.log(responseJSON.data)
      const options = responseJSON.data.map((item) => ({
        value: `${item.latitude} ${item.longitude}`,
        label: `${item.name} , ${item.countryCode}`,
      }))
      console.log(options);
      const [lat,lon] = options[0].value.split(" ");
      
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );

      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );

      Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: options[0].label, ...weatherResponse})
        setForecast({ city: options[0].label, ...forecastResponse });
        
      })
      .catch((err) => {
        console.log(err)
      })
    }
    catch( err)  {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <SearchBox onSearchChange={searchCities}/>
        {currentWeather && <Body data={currentWeather}/> }
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background : {
    backgroundColor: "#42C2FF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 600,
  }
});
