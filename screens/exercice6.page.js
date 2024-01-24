import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Exercice6Page = ({ navigation }) => {
  const [firstname, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="First Name"
        placeholder="Jhon"
        value={firstname}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        label="Last Name"
        placeholder="Doe"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <Button
      style={styles.button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "70%",
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Exercice6Page;
