import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border } from 'victory-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  WebView,
  ImageBackground,
  Dimensions
} from 'react-native';

import PortfolioTab from '../components/PortfolioTab'
import HomeChart from '../components/HomeChart';
import CustomButton from '../components/CustomButton';
import { Colors } from '../constants/styles';

type Props = {};

class Home extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HomeChart/>
        <PortfolioTab/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appGrey,
  }
});

export default Home