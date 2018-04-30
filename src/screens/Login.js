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

import { connect, dispatch } from 'react-redux';
import { login } from '../actions/index';
import axios from "axios";

import CustomButton from '../components/CustomButton';
import GoBackButton from '../components/GoBackButton';
import { Colors } from '../constants/styles';
import InputWithIcon from '../components/InputWithIcon';

type Props = {};
class Login extends Component<Props> {
  state = {
    username: "",
    password: ""
  }

  onLoginPress = () => {
    let {username, password} = this.state
    this.props.login(username, password, this.props.navigation.navigate)
  }

  render() {
    if (this.props.loading){
      return (
        <View style={styles.container}>
          <Image 
            style={{height: 350, width: 350, resizeMode: 'cover'}}
            source={{uri: 'https://i.redd.it/ounq1mw5kdxy.gif'}}/>
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, backgroundColor: Colors.appGrey}}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <GoBackButton navigation={this.props.navigation}/>
            <Image
              style={{
                width: 100,
                height: 100
              }}
              source={require('../assets/emcee-icon.png')}
            />
            <Text style={{color: 'red', fontSize: 12}}>{this.props.error ? "username or password don't match" : null}</Text>
            <View>
              <InputWithIcon
                iconUrl="https://cdn3.iconfinder.com/data/icons/sympletts-part-3/128/circle-user-man-512.png"
                placeholder="username"
                inputValue={this.state.username}
                onInputChange={username => this.setState({username})}
              />
              <InputWithIcon
                iconUrl="https://cdn1.iconfinder.com/data/icons/circle-outlines/512/Lock_Locked_Password_Protected_Secure_Safe_Security-512.png"
                placeholder="password"
                secureTextEntry={true}
                inputValue={this.state.password}
                onInputChange={password => this.setState({password})}
              />
            </View>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => this.props.navigation.navigate("App")}
              >
              <Text>Forgot your username/password?</Text>
            </TouchableOpacity>
            <CustomButton
              buttonStyles={{marginTop: 20}}
              buttonAction={this.onLoginPress}
              buttonText={'Log in'}
            />
          </KeyboardAvoidingView>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  error: state.user.error,
  loading: state.user.loading,  
})

// const mapDispatchToProps = (dispatch) => ({
//   login: (username, password, navigate) => dispatch(login(username, password, navigate))
// })

export default connect(mapStateToProps, {login})(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appWhite,
    borderRadius: 15
  }
});
