import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const DashboardPage = ({ navigation }) => {


  return (
    <View style={styles.container}>
        <Text>Dashboard</Text>
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

export default DashboardPage;
