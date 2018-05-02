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
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border, VictoryAxis } from 'victory-native';

const NUMBER_OF_POINTS = 20

const randomNum = (i) => Math.floor(Math.random() * 20 + Math.log2(i * (i/100))) * (Math.random() < .03 ? 4 : 1)

const generateChart = () => Array.apply(null, {length: NUMBER_OF_POINTS}).map( (el, i) => randomNum(i+1))

const ResultItem = ({result}) => {
    // debugger
    return(<View style={resultStyles.resultBox}>
      <View>
        <Text style={resultStyles.stuff}>{result.heading}</Text>
        <Text style={resultStyles.name}>{result.name}</Text>      
      </View>
      <View>
        <VictoryChart
          theme={null}
          animate={{easing: 'cubicInOut', duration: 500, onLoad: { duration: 50 }}}
          categories={null}
          labels={null}
          padding={0}
          width={80}
          height={30}>
          <VictoryLine
            style={{
              data: { stroke: (result.change.toString().includes('-') ? Colors.appPurple : Colors.appGreen), strokeWidth: 1 }
            }}
            data={generateChart()}
          />
          <VictoryLine
            style={{
              data: { stroke: Colors.appGrey, strokeDasharray: "4,4", strokeWidth: 1 }
            }}
            labelComponent={<Text style={{fontSize: 10, color: 'red'}}>closing $1</Text>}
            labels={['closing $1']}            
            data={[{x:0, y: 10},{x:20,y:10}]}
          />
          <VictoryAxis tickFormat={() => ''} style={{ axis: {stroke: "none"} }} />        
        </VictoryChart>
      </View>
      <View>
        <Text style={resultStyles.price}>{result.change}</Text>
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
  stuff: {
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
            renderItem={({item}) => <TouchableOpacity
            onPress={() => {
              this.props.setSelectedStock(item)
              this.props.navigation.navigate('BuyAsset')
            }}><ResultItem result={item}/></TouchableOpacity>}
            keyExtractor={(item, index) => index.toString()}
          />
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
