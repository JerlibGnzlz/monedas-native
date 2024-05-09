import { Text, StyleSheet, View, TouchableHighlight, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Formulario = ({ moneda, setMoneda, criptomoneda, setCriptomoneda, setConsultarAPI }) => {





    const [criptomonedas, setCriptomonedas] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const resultado = await axios.get(URL)
            setCriptomonedas(resultado.data.Data)
            console.log(resultado.data.Data)

        }

        consultarAPI()
    }, [])


    const obtenerMoneda = moneda => {
        setMoneda(moneda)
    }

    const obtenerCriptoMoneda = cripto => {
        setCriptomoneda(cripto)
    }

    const cotizarPrecion = () => {
        if (moneda.trim() === "" || criptomoneda.trim() == "") {
            mostrarAlerta()
            return
        }
        setConsultarAPI(true)
    }


    const mostrarAlerta = () => {
        Alert.alert(
            "Error...",
            "ambos campos son requeridos"
        )
    }
    return (
        <View>
            <Text style={styles.label}>
                Monedas
            </Text>

            <Picker
                onValueChange={moneda => obtenerMoneda(moneda)}
                selectedValue={moneda}
            >
                <Picker.Item label="--Seleccione--" value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>



            <Text style={styles.label}>
                Criptomonedas
            </Text>

            <Picker
                selectedValue={criptomoneda}
                onValueChange={cripto => obtenerCriptoMoneda(cripto)}
            >
                <Picker.Item label="--Seleccione--" value="" />
                {criptomonedas.map(cripto => (
                    <Picker.Item
                        key={cripto.CoinInfo.Id}
                        label={cripto.CoinInfo.FullName}
                        value={cripto.CoinInfo.Name}
                    />
                ))}
            </Picker>
            {
                <TouchableHighlight
                    style={styles.btnCotizar}
                    onPress={() => cotizarPrecion()}

                >
                    <Text style={styles.txtCotizar}>Cotizar</Text>
                </TouchableHighlight>}



        </View >
    )
}


const styles = StyleSheet.create({
    label: {
        textTransform: "uppercase",
        fontSize: 22,
        marginVertical: 20,
    },
    btnCotizar: {
        backgroundColor: "blue",
        padding: 10,
        margin: 20,
        borderRadius: 50
    },
    txtCotizar: {
        color: "#FFF",
        fontSize: 20,
        textTransform: "uppercase",
        textAlign: "center"
    }
})

