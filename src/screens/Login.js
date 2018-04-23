import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import {connect, dispatch} from 'react-redux';
import {login} from '../actions/auth';
import axios from "axios";

import GoBackButton from '../components/GoBackButton';
import { Colors } from '../constants/styles';


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
          // console.log('I worked')
          // console.log(this)          
          // debugger
          this.setState({
            error: true
          })
        }
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.appGrey}}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <GoBackButton props={this.props.navigation}/>
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('../assets/emcee-icon.png')}
          />
          <Text style={{color: 'red', fontSize: 12}}>{this.state.error ? "username or password don't match" : null}</Text>
          <View>
            <View style={styles.inputBox}>
              <Image
                style={styles.inputImage}
                source={{uri: "https://cdn3.iconfinder.com/data/icons/sympletts-part-3/128/circle-user-man-512.png"}}
              />
              <TextInput
                placeholder="Username"
                onChangeText={ username => this.setState({username})}
                value={this.state.username}
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input}/>
            </View>
            <View style={styles.inputBox}>
              <Image
                style={styles.inputImage}
                source={{uri: "https://cdn1.iconfinder.com/data/icons/circle-outlines/512/Lock_Locked_Password_Protected_Secure_Safe_Security-512.png"}}
              />
              <TextInput
                placeholder="Password"          
                onChangeText={ password => this.setState({password})}
                value={this.state.password}     
                style={styles.input} 
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'/>
            </View>
          </View>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate("App")}
            >
            <Text>Forgot your username/password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.onLoginPress}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center' }}>Log in</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
    backgroundColor: Colors.appWhite,
    borderRadius: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
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
  button: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,65,67)',
    height: 40,
    width: '90%',
    borderRadius: 20
  },
  inputImage: {
    height: 30, 
    width: 30, 
    resizeMode: "cover"
  }
});
