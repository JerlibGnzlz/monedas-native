import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { Formulario } from './components/Formulario';
import { useState } from 'react';

export default function App () {

  const [moneda, setMoneda] = useState("")
  const [criptomoneda, setCriptomoneda] = useState("")
  const [consultarAPI, setConsultarAPI] = useState(false)

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

