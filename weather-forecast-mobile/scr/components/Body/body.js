import { StyleSheet, Text, View, Image } from "react-native";


const getDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return date + '/' + month + "/" + year;
}

export default function Body() {
  const dateToDay = getDate();
  const date = new Date();
  const dayName = date.toLocaleString("en-US", {weekday: 'long'})

  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.place}>Kigali, RW</Text>
      <Text style={styles.temperature}>23 &#176;C</Text>
      <View>
        <Image
          source={require("../../../assets/sun.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Sunny</Text>
      <View style={styles.date}>
        <Text style={styles.text}>{dayName}</Text>
        <Text style={styles.text}>{dateToDay}</Text>
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
  place: {
    fontFamily: "inter-bold",
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: "#fff",
  },
  temperature: {
    fontFamily: "inter-bold",
    fontSize: 40,
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
    marginTop: 5,
    marginBottom: 5,
  },
});
