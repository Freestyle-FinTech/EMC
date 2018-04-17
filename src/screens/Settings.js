import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect, dispatch} from 'react-redux'

import { logout } from '../actions/auth'
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
class Settings extends Component<Props> {
  onLogOutPressed = () => {
    this.props.logout()
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onLogOutPressed}>
          <Text style={styles.welcome}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({type: "LOGOUT"})
})

export default connect(null, mapDispatchToProps)(Settings)

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
  }
});
