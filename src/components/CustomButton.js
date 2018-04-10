import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";

//backgroundColor: 'rgb(65,65,67)',
export default CustomButton = ({buttonAction, buttonText}) => {
  return(
    <TouchableOpacity 
    onPress={buttonAction}
    style={styles.button}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    marginTop: 10,
    justifyContent: 'center',
    height: 40,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'rgb(65,65,67)',
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: 'center'
  }
})


