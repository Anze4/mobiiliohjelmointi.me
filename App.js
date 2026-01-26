import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";


export default function App() {
  const [luku1, setLuku1] = useState("");
  const [luku2, setLuku2] = useState("");
  const [tulos, setTulos] = useState(0);

  const [historia, setHistoria] = useState([]);

  const laskeYhteen = () => {
    const vastaus = (Number(luku1) + Number(luku2));
    setTulos(vastaus)
    setHistoria([...historia, luku1 + " + " + luku2 + " = " + vastaus]);
  };

  const laskeErotus = () => {
    const vastaus = (Number(luku1) - Number(luku2));
    setTulos(vastaus)
    setHistoria([...historia, luku1 + " - " + luku2 + " = " + vastaus]);
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.tulos}>Tulos: {tulos}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={luku1}
        onChangeText={setLuku1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={luku2}
        onChangeText={setLuku2}
      />

      <View style={styles.buttons}>
        <Button title="+" onPress={laskeYhteen} />
        <Button title="-" onPress={laskeErotus} />
      </View>

      <Text style={{ marginTop: 20 }}>History: </Text>

       <FlatList
        data={historia}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tulos: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});

