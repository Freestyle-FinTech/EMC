import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Colors } from '../constants/styles';

import PortfolioList from '../components/PortfolioList';

class PortfoliosTab extends Component {
  buildPortfolios = () => {
    if(this.props.user.portfolios.length === 0){
      return <Text style={{marginTop: 15, marginBottom: 15, alignSelf: 'center'}}>Looks Like you don't have any portfolios</Text>
    } else {
      return <PortfolioList portfolios={this.props.user.portfolios}/>
    }
  }
  render(){
    return(
      <View>
        <View style={styles.portfolios}>
          {this.buildPortfolios()}
          <CustomButton
            buttonAction={() => { this.props.screenProps.navigation.navigate('CreatePortfolio')}}
            buttonText="Create new"
          />
        </View>
        <View style={styles.portfolios}>
          <Text style={styles.recommended}>Recommended</Text>
          <PortfolioList portfolios={this.props.portfolios}/>        
          <CustomButton
            buttonAction={() => {}}
            buttonText="Refresh"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  portfolios: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 5,
    paddingBottom: 15,
    justifyContent: 'center',
  },
  recommended: {
    marginLeft: 15,
    fontSize: 17
  }
});

const mapStateToProps = (state) => ({
  user: state.user,
  portfolios: state.portfolios
})

export default connect(mapStateToProps)(PortfoliosTab)