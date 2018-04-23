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

const {width} = Dimensions.get('window')
const MARGIN = 0.12
const ITEM_WIDTH = (width * (1 - MARGIN))/2


const ListItem = (props) => (
  <ImageBackground
    style={{
      borderRadius: 10, 
      width: ITEM_WIDTH, 
      height: ITEM_WIDTH,
      marginLeft: (MARGIN * 100)/3 + '%',
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
      style={{backgroundColor: "white", height: ITEM_WIDTH/3}}>
      <Text>
        {props.asset.name}
      </Text>
      <Text style={{color: "rgb(109,233,180)"}}>
        {props.asset.worth}
      </Text>
    </View>
  </ImageBackground>
)

type Props = {};

export default class PortfolioList extends Component<Props> {
  render(){
    return(
      <FlatList
        numColumns={2}
        data={this.props.portfolios}
        renderItem={({item}) => <ListItem asset={item} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  
})
