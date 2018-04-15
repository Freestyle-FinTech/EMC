import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

type Props = {};
export default class CreatePortfolio extends Component<Props> {
  state = {
    name: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChange={(e) => this.setState({name: e.target.value}) } 
          value={this.state.name}
          />
        <Text style={styles.welcome}>
          Register
        </Text>
      </View>
    );
  }
}

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
