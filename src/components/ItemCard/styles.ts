import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        marginBottom: 10,
        padding: 10
    },

    poster: {
        height: 50,
        width: 40,
        marginRight: 8
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default styles;
