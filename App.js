import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { Formulario } from './components/Formulario';

export default function App () {
  return (
    <>
      <Header />

      <Image
        style={styles.imagen}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View style={styles.contenido}>
        <Formulario />
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
