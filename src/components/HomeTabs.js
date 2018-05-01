import React from 'react';
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { HomeTabsRouter, UserScreens, PortfolioScreens, AssetScreens } from '../config/routes';

const HomeTabs = (props) => {
  let screens
  if(props.selectedStock){
    screens = AssetScreens    
  } else if(props.selectedPortfolio) {
    screens = PortfolioScreens
  } else {
    screens = UserScreens
  }
  const Stuff = HomeTabsRouter(screens)
  return(
    <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 5}}>
      <Stuff screenProps={{navigation: props.navigate, setSelectedPortfolio: props.setSelectedPortfolio}}/>
    </View>  
  )
}

const mapStateToProps = (state) => ({
  selectedPortfolio: state.search.selectedPortfolio,
  selectedStock: state.search.selectedStock
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedPortfolio: asset => dispatch({type: 'SET_SELECTED_STOCK', payload: asset})
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs)