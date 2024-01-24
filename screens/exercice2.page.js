import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/custom.button.component";

const Exercice2Page = ({ navigation }) => {


  return (
    <View style={styles.container}>
        <CustomButton text={'click'} onPress={() => console.log('Pressed')}/>
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

export default Exercice2Page;
