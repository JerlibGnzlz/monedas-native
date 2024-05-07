import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export const Formulario = () => {
    return (
        <View>
            <Text style={styles.label}>
                Monedas
            </Text>

            <Picker>
                <Picker.Item label="--Seleccione--" value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.label}>
                Criptomonedas
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        textTransform: "uppercase",
        fontSize: 22,
        marginVertical: 10,

    }
})