import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Colors } from '../constants/styles';

const {width} = Dimensions.get('window')
const MARGIN = 0.12
const ITEM_WIDTH = (width * (1 - MARGIN))/2


export default (props) => {
  let itemWidth = props.width || ITEM_WIDTH 
  return <ImageBackground
    style={{
      backgroundColor: Colors.appGrey,
      borderRadius: 10, 
      width: itemWidth, 
      height: itemWidth,
      marginLeft: props.marginLeft || (MARGIN * 100)/3 + '%',
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }
    }}
    imageStyle={{borderRadius: 10}}
    source={{uri: props.asset.imgUrl}}>
  >
    <View 
      style={{backgroundColor: "white", height: itemWidth/3, padding: 5}}>
      <Text style={styles.name}>
        {props.asset.name}
      </Text>
      {itemWidth >= 150 ? 
        <View style={{justifyContent: "flex-start", flexDirection: "row"}}>
          <Text style={[styles.price, {color: props.asset.priceChange > 0 ? Colors.appGreen : Colors.appPurple}]}>
            ${props.asset.worth}
          </Text>
          <View style={[styles.priceBox, {backgroundColor: props.asset.priceChange > 0 ? Colors.appGreen : Colors.appPurple}]}>
          <Text
            style={styles.priceChange}>
            {(props.asset.priceChange > 0 ? '+' : '') + props.asset.priceChange}%
          </Text>
          </View>
        </View>
        : null
      }
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',    
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
  }
})