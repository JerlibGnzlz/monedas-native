import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Formulario = () => {

    const [moneda, setMoneda] = useState("")
    const [criptomoneda, setCriptomoneda] = useState("")
    const [criptomonedas, setCriptomonedas] = useState("")

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


            <View>
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

            </View>

        </View >
    )
}


const styles = StyleSheet.create({
    label: {
        textTransform: "uppercase",
        fontSize: 22,
        marginVertical: 10,

    }
})

