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
import {connect} from 'react-redux';

import GoBackButton from '../components/GoBackButton';
import PortfolioItem from '../components/PortfolioItem';
import CustomButton from '../components/CustomButton';

import { Colors } from '../constants/styles';
import { buyAsset } from '../actions/index';
type Props = {};

class Search extends Component<Props> {
  state={
    numberOfShares: '',
    investmentValue: '',    
  }
  
  placeOrderHandler = () => {
    debugger
    this.props.buyAsset(this.state.investmentValue, this.state.numberOfShares)
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <GoBackButton navigation={this.props.navigation}/>
          {this.props.selectedPortfolio
          ? 
            <PortfolioItem asset={this.props.selectedPortfolio} navigate={() => this.props.navigation.navigate('ChoosePortfolio')} width={100}/>
          :
            <CustomButton 
              buttonText='Select portfolio'
              textStyles={{color: 'white'}} 
              buttonStyles={{ marginTop: 60, width: 180, height: 50, borderRadius: 25, backgroundColor: Colors.appGreen}}
              buttonAction={() => this.props.navigation.navigate('ChoosePortfolio')}/>
          }
          <View style={{alignItems: 'center'}}>
            <Text>{this.props.selectedStock.heading}</Text>
            <Text>{this.props.selectedStock.name}</Text>
            <Text>current share price:</Text>
            <Text>{this.props.selectedStock.currentSharePrice}</Text>
          </View>
          <View style={styles.inputBox}>
            <Text style={{alignSelf: 'flex-end'}}>Investment value</Text>
            <TextInput
              placeholder="$0.00"
              keyboardType="numeric"                     
              onChangeText={ investmentValue => 
                this.setState({
                  investmentValue, 
                  numberOfShares: (Math.round(parseFloat(investmentValue)/this.props.selectedStock.currentSharePrice* 100)/100).toString()
                })}               
              value={this.state.investmentValue === "NaN" ? '' : this.state.investmentValue}                   
              style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'/>
          </View>
          <View style={styles.inputBox}>
            <Text style={{alignSelf: 'flex-end'}}>Number of shares</Text>
            <TextInput
              keyboardType="numeric"                        
              placeholder="0"
              onChangeText={ numberOfShares => 
                this.setState({
                  numberOfShares, 
                  investmentValue: (Math.round(parseFloat(numberOfShares) * this.props.selectedStock.currentSharePrice * 100)/100).toString()
                })}
              value={this.state.numberOfShares === "NaN" ? '' : this.state.numberOfShares}              
              style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'/>
          </View>
          <CustomButton buttonAction={this.placeOrderHandler} buttonText="Place order"/>        
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPortfolio: state.search.selectedPortfolio,
  selectedStock: state.search.selectedStock
})

// const mapDispatchToProps = (dispatch) => ({
//   buyAsset: (asset) => dispatch({type: 'ADD_ASSET_TO_PORTFOLIO', payload: asset})
// })

export default connect(mapStateToProps, { buyAsset })(Search)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appGrey,
  },
  input: {
    flex: 1,
    height: 40,
    textAlign: 'right'
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgb(65,65,67)',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20
  },
});
