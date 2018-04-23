import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import CarouselWrapper from '../components/CarouselWrapper';
import MainButtons from '../components/MainButtons';
import { Colors } from '../constants/styles';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CarouselWrapper/>
        <MainButtons navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appGrey,
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
