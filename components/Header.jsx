import { StyleSheet, Text, View } from 'react-native';



const Header = () => (
    <Text style={styles.encabezado}>
        Criptomonedas
    </Text>
)



const styles = StyleSheet.create({
    encabezado: {
        paddingBottom: 30,
        padding: 50,
        textTransform: "uppercase",
        backgroundColor: 'purple',
        textAlign: 'center',
        color: "white",
        fontSize: 30

    },
});


export default Header