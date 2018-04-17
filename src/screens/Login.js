import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import {connect, dispatch} from 'react-redux'
import {login} from '../actions/auth'
import axios from "axios"

type Props = {};
class Login extends Component<Props> {
  state = {
    username: "",
    password: ""
  }

  onLoginPress = () => {
    axios.get("http://localhost:3000/users")
      .then(response => {
        let user = response.data.find( user => user.userName === this.state.username && user.password === this.state.password)
        if(user) {
          console.log(this.props)
          this.props.login(user)
          // debugger
          this.props.navigation.navigate("App")
        } else {
          //errors
        }
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100
          }}
          source={require('../assets/emcee-icon.png')}
        />
        <TextInput
          placeholder="Username"
          onChangeText={ username => this.setState({username})}
          value={this.state.username}
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.input}/>
        <TextInput
          placeholder="Password"          
          onChangeText={ password => this.setState({password})}
          value={this.state.password}     
          style={styles.input} 
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)'/>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => this.props.navigation.navigate("App")}
          >
          <Text>forgot username or password?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.onLoginPress}
          style={styles.button}>
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center' }}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

dispatchMapToProps = (dispatch) => ({
  login: (user) => dispatch({type: "LOGIN", payload: user})
  // login
})

export default connect(null, dispatchMapToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(65,65,67)',
    width: '90%',
    height: 40
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,65,67)',
    height: 40,
    width: '90%',
    borderRadius: 20
  }
});
