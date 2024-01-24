import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';


const CustomButton = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color ? color : MD3Colors.primary50}]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomButton;
