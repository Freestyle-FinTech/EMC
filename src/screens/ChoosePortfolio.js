import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import GoBackButton from '../components/GoBackButton';
import PortfolioList from '../components/PortfolioList';
import CustomButton from '../components/CustomButton';

import { Colors } from '../constants/styles';

class ChoosePortfolio extends Component {
  // onPortFolioItemClicked = (portfolio, navigation) => {

  // }
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <GoBackButton navigation={this.props.navigation}/>
        <Text>Choose a portfolio from your existing portfolios below or</Text>
        <CustomButton
          buttonText='Create a new one'
          buttonAction={ () => this.props.navigation.navigate('CreatePortfolio')}
        />
        <ScrollView>
          <PortfolioList
            navigate={() => this.props.navigation.navigate('BuyAsset')}
            portfolios={this.props.portfolios}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.user.portfolios
})

export default connect(mapStateToProps)(ChoosePortfolio)