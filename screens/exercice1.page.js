import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const Exercice1Page = ({ navigation }) => {


  return (
    <View style={styles.container}>
        <Text>Exercice 1</Text>
    </View>
  );
};

styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Exercice1Page;
