import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import * as React from "react";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={()=> navigation.push('Exercice1')}>Exercice 1</Button>
      <Button onPress={()=> navigation.push('Exercice2')}>Exercice 2</Button>
      <Button onPress={()=> navigation.push('Exercice3')}>Exercice 3</Button>
      <Button onPress={()=> navigation.push('Exercice4')}>Exercice 4</Button>
      <Button onPress={()=> navigation.push('Exercice5')}>Exercice 5</Button>
      <Button onPress={()=> navigation.push('Exercice6')}>Exercice 6</Button>
      <Button onPress={()=> navigation.push('Exercice7')}>Exercice 7</Button>
      <Button onPress={()=> navigation.push('Exercice8')}>Exercice 8</Button>
      <Button onPress={()=> navigation.push('Exercice9')}>Exercice 9</Button>
      <Button onPress={()=> navigation.push('Exercice10')}>Exercice 10</Button>
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

export default HomePage;
