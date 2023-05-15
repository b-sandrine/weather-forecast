import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  
  // const [dataLoaded] = () => {
  //   useFonts({
  //     'inter-regular': require('./assets/inter/Inter-Bold.ttf'),
  //     'inter-bold': require('./assets/inter/Inter-Regular.ttf'),
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>23 &#176;C</Text>
      <Text>Sunny</Text>
      <Text>Monday</Text>
      <Text>23/05/2022</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
