import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [val, setVal] = useState('');
  const [fin, setFin] = useState('');
  const [point, setPoint] = useState();
  const [score, setScore] = useState(0);
  
  function handleInput(e) {
    setVal(e);
  }

  function click() {
    const a = Math.floor(Math.random() * 5) + 1;
    setPoint(a);
    const numVal = parseInt(val);
    setVal()
    if (!val) {
      alert("Please enter a number. Do not submit without entering a number.");
      return;
    }

    if (numVal < 1 || numVal > 5) {
      alert("Enter a valid number. Accepted numbers are from 1 to 5.");
      return;
    }

    setFin(numVal);

    if (a === numVal && score !== 5) {
      setScore(prev => prev + 1);
    } else if (a !== numVal && score !== -5) {
      setScore(prev => prev - 1);
    }

    if (score === 5) {
      setVal('');
      setFin('');
      setPoint(null);
      setScore(0);
      alert("You won!");
    } else if (score === -5) {
      setVal('');
      setFin('');
      setPoint(null);
      setScore(0);
      alert("You lost!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number!</Text>
      <Text style={styles.subtitle}>Pick a number from 1 to 5</Text>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder="Enter your guess"
          onChangeText={handleInput}
          keyboardType="numeric"
          value={val}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={click} color="#4CAF50" />
      </View>
      {fin ? <Text style={styles.result}>Your guess: {fin}</Text> : null}
      <Text style={styles.result}>Random number: {point}</Text>
      <Text style={styles.rules}>
        Rules: Start with 0 points. If your score reaches -5, you lose.
      </Text>
      <Text style={styles.score}>Your Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#666",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: '80%'
  },
  input: {
    height: 50,
    borderColor: "#4CAF50",
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#333",
  },
  buttonContainer: {
    marginBottom: 20,
    width: "60%",
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    color: "#333",
  },
  rules: {
    marginTop: 30,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 30,
  },
  score: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
  },
});