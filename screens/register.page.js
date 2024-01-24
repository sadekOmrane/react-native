import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const RegisterPage = ({ navigation }) => {
    const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        label="Name"
        placeholder="Jhon Doe"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        label="Email"
        placeholder="Example@example.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
      style={styles.button}
        mode="contained"
        onPress={() => navigation.push("Dashboard")}
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
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    width: "70%",
    height: 50,
    margin: 12,
    borderWidth: 1,
  },
});

export default RegisterPage;
