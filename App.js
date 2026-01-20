import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttons}>
        <Button title="+" onPress={add} />
        <Button title="-" onPress={subtract} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
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

