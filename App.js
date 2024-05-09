import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Formulario } from './components/Formulario';
import { Cotizacion } from './components/Cotizacion';

export default function App () {

  const [moneda, setMoneda] = useState("")
  const [criptomoneda, setCriptomoneda] = useState("")
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
    const cotizarCriptomonedas = async () => {
      if (consultarAPI) {

        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios(URL)
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
        console.log(resultado.data.DISPLAY[criptomoneda][moneda])

        setConsultarAPI(false)
      }
    }
    cotizarCriptomonedas()
  }, [consultarAPI])

  return (
    <>
      <Header />

      <Image
        style={styles.imagen}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarAPI={setConsultarAPI}
        />

        <Cotizacion
          resultado={resultado}
        />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: 5,
    marginVertical: 10
  },
  contenido: {
    marginHorizontal: 10
  }
});

