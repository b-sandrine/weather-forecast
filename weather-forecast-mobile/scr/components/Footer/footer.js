import { StyleSheet, View, Text } from "react-native";

export default function Footer () {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.headerText}>
                7 Days
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 150,
        marginTop: 20,
        marginLeft: 20,
    },
    headerText: {
        color: '#48738D'
    }
})