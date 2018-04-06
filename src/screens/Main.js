import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import CarouselWrapper from '../components/CarouselWrapper';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CarouselWrapper/>
        <View style={styles.buttons}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Register")}
            style={styles.loginButton}>
            <Text style={{fontSize: 20,  color: 'white', textAlign: 'center' }}>Sign up</Text>
          </TouchableOpacity>    
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Login")}
            style={[styles.loginButton, styles.registerButton]}>
            
            <Text style={{fontSize: 20, color: 'rgb(65,65,67)', textAlign: 'center' }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(65,65,67)",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  buttons: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 2,
    alignItems: "center"
  },
  loginButton: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,65,67)',
    height: 40,
    width: '90%',
    borderRadius: 20
  },
  registerButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: 'rgb(65,65,67)'
  }
});
