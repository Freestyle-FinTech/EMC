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
import ListItem from './PortfolioItem'

type Props = {};

export default class PortfolioList extends Component<Props> {
  render(){
    return(
      <FlatList
        numColumns={2}
        scrollEnabled={false}
        data={this.props.portfolios}
        renderItem={({item}) => <ListItem asset={item}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

const styles = StyleSheet.create({
  
})
