import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '../constants/styles';
import { clearSelectedPortfolio, clearSelectedStock } from '../actions/index';

const ChartHeader = (props) => {
  const date = new Date()
  const growth = props.user.portfolioGrowth
  const plus = growth > 0 ? '+' : ''
  const worth = props.user.portfolioWorth
  const hours = date.getHours() <= 12 ? date.getHours() : 24 - date.getHours()
  const ampm = date.getHours() <= 12 ? 'am' : 'pm' 
  const currentTime = `Today ${hours}:${date.getMinutes()}${ampm}`
  let TopLeft;
  if(props.selectedStock) {
    TopLeft = () => (<View style={{position: 'absolute', alignSelf: 'flex-start'}}>
      <Text style={styles.heading} onPress={props.clearSelectedStock}>{props.selectedStock.name}</Text>
    </View>)
  } else if(props.selectedPortfolio) {
    TopLeft = () => (<View style={{position: 'absolute', alignSelf: 'flex-start'}}>
      <Text style={styles.heading} onPress={props.clearSelectedPortfolio}>{props.selectedPortfolio.name}</Text>  
    </View>)
  } else {
    TopLeft = () => (<View style={{position: 'absolute', alignSelf: 'flex-start'}}>
        <Image
          source={{uri: props.user.pictureUrl}}
          style={{height: 40, width: 40, borderRadius: 20, marginTop: 10, marginLeft: 10}}
        />
        <Text style={styles.heading}>{props.user.username}</Text>
      </View>)
  }
  return (
    <View style={{height: 90, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TopLeft/>
        <Text style={styles.worth}>${worth}</Text>
        <View style={[styles.priceBox,{backgroundColor: growth > 0 ? Colors.appGreen : Colors.appPurple}]}>
          <Text style={styles.priceChange}>{`${plus}${growth}(${Math.round(growth/worth * 10000)/100}%)`}</Text>
        </View>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  selectedPortfolio: state.search.selectedPortfolio,
  selectedStock: state.search.selectedStock
})

export default connect(mapStateToProps, {clearSelectedPortfolio, clearSelectedStock})(ChartHeader)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appGrey,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10,
  },
  priceChange: {   
    color: Colors.appWhite,
    fontSize: 12, 
  },
  priceBox: {
    marginLeft: 5,
    borderRadius: 5,
    paddingRight: 5,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  worth: {
    fontSize: 30,
  },
  time: {
    fontSize: 10
  }
});