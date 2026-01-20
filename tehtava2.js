import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1-100");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const makeGuess = () => {
    const userGuess = Number(guess);
    const newCount = count + 1;
    setCount(newCount);

    if (userGuess < number) {
      setMessage(`Your guess ${userGuess} is too low`);
    } else if (userGuess > number) {
      setMessage(`Your guess ${userGuess} is too high`);
    } else {
      setMessage(`You guessed the number in ${newCount} guesses`);
    }

    setGuess("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />

      <Button title="MAKE GUESS" onPress={makeGuess} />
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
