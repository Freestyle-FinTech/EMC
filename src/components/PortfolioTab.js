import React from 'react';
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '../constants/styles'
import CustomButton from './CustomButton';
import AssetListItem from './AssetListItem';
import { setSelectedStock } from '../actions/index'

const PortfolioTab = (props) => {
  let assets = props.selectedPortfolio.stocks
  if (assets && assets.length !== 0) {
    // debugger
    return (
      <View style={{flex: 1, minHeight: 300, marginTop: 20}}>
        <FlatList
          scrollEnabled={true}
          data={assets}
          renderItem={({item}) => <TouchableOpacity
          onPress={() => {
            props.setSelectedStock(item)
          }}>
            <AssetListItem result={item}/>
          </TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
          <ResultItem
            result={{title: "SPOT", name: 'Spotify Technology SA', price: '+3.45%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
          <ResultItem
            result={{title: "TSLA", name: 'Tesla inc', price: '+1.45%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
          <ResultItem
            result={{title: "NASA", name: 'Space inc', price: '+2.45%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => props.screenProps.setSelectedPortfolio('lol') }>
          <ResultItem
            result={{title: "NASCAR", name: 'Bootleg drinks inc', price: '+1.25%'}}
          />
        </TouchableOpacity> */}
        <CustomButton
          buttonText="Search assets"
          buttonAction={ () => props.screenProps.navigation.navigate('AssetSearch')}
        />
      </View>
    )
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Looks like you don't have any assets</Text>
        <CustomButton
          buttonText="Search assets"
          buttonAction={ () => props.screenProps.navigation.navigate('AssetSearch')}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedPortfolio: state.search.selectedPortfolio
})

export default connect(mapStateToProps, { setSelectedStock })(PortfolioTab)