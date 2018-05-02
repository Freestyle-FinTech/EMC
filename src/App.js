import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View, Platform, StyleSheet, Text } from 'react-native';
import AppWithNavigationState from './config/routes';
import store from './config/store';
import { Colors } from './constants/styles';
import axios from 'axios';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <MyStatusBar backgroundColor={Colors.appGrey} barStyle="light-content" />
      <AppWithNavigationState/>
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appGrey,
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
});