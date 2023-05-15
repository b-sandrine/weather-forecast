import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.headerText}>
                7 Days
            </Text>
            <FontAwesomeIcon icon={faChevronRight} size={10} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 150,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#48738D',
        // marginRight: 5,
    }, 
    icon : {
        float: 'right',
    }
})