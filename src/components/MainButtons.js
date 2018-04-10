import React from "react";
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity
} from "react-native";

import Carousel from 'react-native-carousel';
import CustomButton from './CustomButton';

export default MainButtons = ({navigate}) => {
  // debugger
  // let a = styleSheetFactory({});
  // styles = {...styles, styleSheetFactory(props)}
  return(
    <View style={styles.buttons}>
      <CustomButton 
        buttonText="Sign Up"
        buttonAction={() => navigate("Register")}
      />
      <CustomButton
        buttonText="Log In"
        buttonAction={() => navigate("Login")}    
      />
      {/* <TouchableOpacity 
      onPress={() => navigate("Register")}
      style={styles.loginButton}>
      <Text style={{fontSize: 20,  color: 'white', textAlign: 'center' }}>Sign up</Text>
      </TouchableOpacity>    
      <TouchableOpacity 
      onPress={() => navigate("Login")}
      style={[styles.loginButton, styles.registerButton]}>
      
      <Text style={{fontSize: 20, color: 'rgb(65,65,67)', textAlign: 'center' }}>Log in</Text>
      </TouchableOpacity> */}

    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 2,
    alignItems: "center"
  }
})