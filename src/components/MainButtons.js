import React from "react";
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity
} from "react-native";

import Carousel from 'react-native-carousel';
import CustomButton from './CustomButton';
import { Colors } from '../constants/styles';

export default MainButtons = ({navigate}) => (
  <View style={styles.buttons}>
    <CustomButton 
      buttonText="Sign Up"
      buttonAction={() => navigate("Register")}
    />
    <CustomButton
      buttonText="Log In"
      buttonAction={() => navigate("Login")}
      buttonStyles={styles.loginButton}
      textStyles={styles.loginButtonText}
    />
  </View>
)

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 0.2,
    justifyContent: "space-around"
  },
  loginButton: {
    backgroundColor: 'red',
    backgroundColor: Colors.appWhite,
    borderWidth: 2,
    borderColor: Colors.appGrey
  },
  loginButtonText: {
    color: Colors.appGrey
  }
})