import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AppLoading from 'expo-app-loading'
import Body from "./scr/components/Body/body";
import Footer from "./scr/components/Footer/footer";
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
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
