import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppLoading from 'expo-app-loading'

const fetchFonts = async () => {
  await Font.loadAsync({
    'inter-regular': require('./assets/inter/Inter-Bold.ttf'),
    'inter-bold': require('./assets/inter/Inter-Regular.ttf'),
    });
};

export default function App() {
  
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>23 &#176;C</Text>
      <View>
        <Image source={
          require("./assets/sun.png")
          } 
          style={styles.image}
        />
      </View>
      <Text>Sunny</Text>
      <View style={styles.date}>
        <Text>Monday</Text>
        <Text>23/05/2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42C2FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  temperature: {
    fontFamily: 'inter-bold',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 60, 
    height: 60,
    marginTop: 10,
    marginBottom: 20,
  },
  date: {
    marginTop: 100, 
    textAlign: 'center'
  }
});
