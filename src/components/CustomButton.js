import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import { Colors } from '../constants/styles';

export default CustomButton = ({buttonAction, buttonText, buttonStyles, textStyles}) => (
  <TouchableOpacity 
    onPress={buttonAction}
    style={[styles.button, buttonStyles]}>
    <Text style={[styles.buttonText, textStyles]}>{buttonText}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    height: 40,
    maxHeight: 40,
    flex: 1,
    width: '90%',
    borderRadius: 20,
    backgroundColor: Colors.appGrey,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.appWhite,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})


