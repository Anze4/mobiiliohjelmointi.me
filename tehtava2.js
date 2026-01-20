import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [arvaus, setArvaus] = useState("");
  const [viesti, setViesti] = useState("Arvaa numero väliltä 1–100");
  const [arvaustenMaara, setArvaustenMaara] = useState(0);
  const [satunnaisluku, setSatunnaisluku] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const teeArvaus = () => {
    const kayttajanArvaus = Number(arvaus);
    const uusiMaara = arvaustenMaara + 1;
    setArvaustenMaara(uusiMaara);

    if (kayttajanArvaus < satunnaisluku) {
      setViesti(`Arvauksesi ${kayttajanArvaus} on liian pieni`);
    } else if (kayttajanArvaus > satunnaisluku) {
      setViesti(`Arvauksesi ${kayttajanArvaus} on liian suuri`);
    } else {
      setViesti(`Arvasit oikein ${uusiMaara} arvauksella`);
    }

    setArvaus("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{viesti}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={arvaus}
        onChangeText={setArvaus}
      />

      <Button title="TEE ARVAUS" onPress={teeArvaus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: 120,
    padding: 5,
    marginBottom: 10,
    textAlign: "center",
  },
});

