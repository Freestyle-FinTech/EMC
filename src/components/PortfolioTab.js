import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions
} from 'react-native';
import { Colors } from '../constants/styles';

import PortfolioList from '../components/PortfolioList';

class PortfolioTab extends Component {
  render(){
    return(
      <View>
        <View style={styles.portfolios}>
          <PortfolioList portfolios={this.props.user.portfolios}/>
          <View style={styles.portfolioButton}>
            <CustomButton
              buttonAction={() => { this.props.navigation.navigate('PortfolioCreate')}}
              buttonText="Create"
            />
          </View>
        </View>
        <View style={styles.portfolios}>
          <Text>Recommended</Text>
          <PortfolioList portfolios={this.props.portfolios}/>          
          <View style={styles.portfolioButton}>          
            <CustomButton
              buttonAction={() => {}}
              buttonText="Refresh"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  portfolios: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
  },
  portfolioButton: {
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
  portfolios: state.portfolios
})

export default connect(mapStateToProps)(PortfolioTab)