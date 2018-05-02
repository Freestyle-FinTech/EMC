
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border, VictoryAxis } from 'victory-native';

import { Colors } from '../constants/styles';
const NUMBER_OF_POINTS = 20

const randomNum = (i) => Math.floor(Math.random() * 20 + Math.log2(i * (i/100))) * (Math.random() < .03 ? 4 : 1)

const generateChart = () => Array.apply(null, {length: NUMBER_OF_POINTS}).map( (el, i) => randomNum(i+1))

export default AssetListItem = ({result}) => (
  <View style={resultStyles.resultBox}>
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
            data: { stroke: Colors.appGreen, strokeWidth: 1 }
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