import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Colors } from '../constants/styles';
import { selectPortfolio } from '../actions/index';

const {width} = Dimensions.get('window')
const MARGIN = 0.12
const ITEM_WIDTH = (width * (1 - MARGIN))/2


class PortfolioItem extends Component {
  onPortfolioClicked = () => {
    this.props.selectPortfolio(this.props.asset);
    if (this.props.navigate) {
      this.props.navigate();
    }
  }

  render () {
    let { imgUrl, name, priceChange, worth } = this.props.asset
    let { width, marginLeft } = this.props
    let itemWidth = width || ITEM_WIDTH
    let calculatedMargin = marginLeft || (MARGIN * 100)/3 + '%'

    return (
      <TouchableOpacity 
        onPress={this.onPortfolioClicked}
        style={{
          marginTop: 10,
          marginBottom: 10,
          width: itemWidth,
          marginLeft: calculatedMargin
        }}>
        <ImageBackground
        style={{
          backgroundColor: Colors.appGrey,
          borderRadius: 10,
          width: itemWidth, 
          height: itemWidth,
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
        source={{uri: imgUrl}}>
        <View style={{backgroundColor: "white", height: itemWidth/3, padding: 5}}>
          <Text style={styles.name}>
            {name}
          </Text>
          {itemWidth >= 150 ? 
            <View style={{justifyContent: "flex-start", flexDirection: "row"}}>
              <Text style={[styles.price, {color: priceChange > 0 ? Colors.appGreen : Colors.appPurple}]}>
                ${worth}
              </Text>
              <View style={[styles.priceBox, {backgroundColor: priceChange > 0 ? Colors.appGreen : Colors.appPurple}]}>
              <Text style={styles.priceChange}>
                {(priceChange > 0 ? '+' : '') + priceChange}%
              </Text>
              </View>
            </View>
            : null
          }
        </View>
      </ImageBackground>
    </TouchableOpacity>
    )
  }
}

export default connect(null, {selectPortfolio})(PortfolioItem)

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