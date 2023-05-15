import { StyleSheet, Text, View, Image } from "react-native";

export default function Body() {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.temperature}>23 &#176;C</Text>
      <View>
        <Image
          source={require("../../../assets/sun.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Sunny</Text>
      <View style={styles.date}>
        <Text style={styles.text}>Monday</Text>
        <Text style={styles.text}>23/05/2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    fontFamily: "inter-bold",
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginBottom: 20,
  },
  date: {
    marginTop: 170,
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter",
  },
});
