import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import CarouselWrapper from '../components/CarouselWrapper';
import MainButtons from '../components/MainButtons';

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
    backgroundColor: "rgb(65,65,67)",
    flexDirection: "column",
    justifyContent: "space-between"
  },
});
