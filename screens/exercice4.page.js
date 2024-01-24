import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from 'react-native-paper';

const Exercice4Page = ({ navigation }) => {
  user = [
    { prenom: "Devin" },
    { prenom: "Dan" },
    { prenom: "Dominic" },
    { prenom: "Jackson" },
    { prenom: "James" },
    { prenom: "Joel" },
    { prenom: "John" },
    { prenom: "Jillian" },
    { prenom: "Jimmy" },
    { prenom: "Julie" },
  ];

  return (
    <View style={styles.container}>
        {user.map((item, index) => (
            <List.Item
                style={{width: '70%'}}
                key={index}
                title={item.prenom}
                left={props => <List.Icon {...props} icon="account" />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
            />
        ))}
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

export default Exercice4Page;
