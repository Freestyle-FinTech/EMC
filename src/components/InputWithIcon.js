import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';

export default InputWithIcon = ({placeholder, iconUrl, onInputChange, inputValue}) => (
  <View style={styles.inputBox}>
    <Image
      style={styles.inputImage}
      source={{uri: iconUrl}}
    />
    <TextInput
      placeholder={placeholder}
      onChangeText={onInputChange}
      value={inputValue}
      underlineColorAndroid='rgba(0,0,0,0)'
      style={styles.input}/>
  </View>
)

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgb(65,65,67)',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20
  },
  inputImage: {
    height: 30, 
    width: 30, 
    resizeMode: "cover"
  }
});
