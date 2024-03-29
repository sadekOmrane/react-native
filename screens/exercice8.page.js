import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Exercice8Page = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Button
      style={styles.button}
        mode="contained"
        onPress={() => navigation.push("Login")}
      >
        Login
      </Button>
      <Button
      style={styles.button}
        mode="contained"
        onPress={() => navigation.push("Register")}
      >
        Register
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
  button: {
    width: "70%",
    height: 50,
    margin: 12,
    borderWidth: 1,
  },
});

export default Exercice8Page;
