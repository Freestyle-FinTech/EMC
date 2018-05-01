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
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';

import { Colors } from '../constants/styles'
import PortfolioList from '../components/PortfolioList'
import SearchBox from '../components/SearchBox'
import GoBackButton from '../components/GoBackButton';
type Props = {};

const ResultItem = ({result}) => {
    return(<View style={resultStyles.resultBox}>
      <View>
        <Text style={resultStyles.heading}>{result.heading}</Text>
        <Text style={resultStyles.name}>{result.name}</Text>      
      </View>
      <View><Text>tiny chart</Text></View>
      <View>
        <Text style={resultStyles.price}>{result.priceChange}</Text>
      </View>    
    </View>
    )
  }

const resultStyles = StyleSheet.create({
  resultBox: {
    height: 60,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.appWhite,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  name: {
    fontSize: 11,
  },
  price: {
    backgroundColor: Colors.appGreen,
    borderRadius: 5,
    paddingRight: 5,
    paddingLeft: 5,    
    color: Colors.appWhite
  }
})

class AssetSearch extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: Colors.appWhite, borderRadius: 15, flex: 1}}>
          <SearchBox/>
          <GoBackButton navigation={this.props.navigation}/>
          <Text style={{marginTop: 15, marginLeft: 10}}>Top Results</Text>
          <FlatList
            scrollEnabled={true}
            data={this.props.stockResults}
            // data={[{heading: "SPOT", name: 'Spotify Technology SA', price: '+3.45%'},{heading: "SPOT", name: 'Spotify Technology SA', price: '+3.45%'}]}
            renderItem={({item}) => <TouchableOpacity
            onPress={() => {
              this.props.setSelectedStock(item)
              this.props.navigation.navigate('BuyAsset')
            }}><ResultItem result={item}/></TouchableOpacity>}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* <ResultItem
            result={{title: "SPOT", name: 'Spotify Technology SA', price: '+3.45%'}}
          /> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios,
  stockResults: state.search.stockResults
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedStock: (stock) => dispatch({type: 'SET_SELECTED_STOCK', payload: stock})
})

export default connect(mapStateToProps, mapDispatchToProps)(AssetSearch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appGrey,
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,65,67)',
    height: 40,
    width: '90%',
    borderRadius: 20
  },
});
