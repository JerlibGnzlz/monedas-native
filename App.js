// import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App () {
  return (
    <>
      <Header />

      <Image
        style={styles.imagen}
        source={require("./assets/img/cryptomonedas.png")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: 5,
    marginVertical: 10
  }
});
