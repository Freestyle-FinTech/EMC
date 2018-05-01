import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import HomeTabs from '../components/HomeTabs';
import WithChart from '../components/WithChart';
import ChartHeader from '../components/ChartHeader';

import { Colors } from '../constants/styles';

class Home extends Component {
  render() {
    return (
      <ScrollView 
        style={styles.container}>
        <WithChart>
          <ChartHeader user={this.props.user}/>
        </WithChart>
        <HomeTabs navigate={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appGrey,
  }
});

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Home)