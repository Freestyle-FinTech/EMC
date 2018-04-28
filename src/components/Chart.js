import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border, VictoryAxis } from 'victory-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Colors } from '../constants/styles';

const ChartButton = ({ buttonText, buttonAction, buttonActive }) => (
  <TouchableOpacity 
    style={styles.chartButton} 
    onPress={buttonAction}
    style={{backgroundColor: (buttonActive ? Colors.appGreen : 'white'), borderRadius: 3, justifyContent: 'center'}}>
    <Text
      style={{color: (buttonActive ? 'white' : Colors.appGreen), fontWeight: 'bold', fontSize: 16, paddingLeft: 7, paddingRight: 7}}
    >
      {buttonText}
    </Text>
  </TouchableOpacity>
)

type Props = {};

class Chart extends Component<Props> {
  state = {
    key: "1D",
    data: {
      "1D": {
        "prices": [ 
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 4 },
          { x: 4, y: 5 },        
          { x: 5, y: 1 },
          { x: 4, y: 1 },
          { x: 3, y: 2 },
          { x: 5, y: 3 } 
        ],
        "high": [{x:1, y:5},{x: 5, y: 5}],
        "low": [{x: 1, y: 1}, {x: 5, y: 1}],
        "closing": [{ x: 1, y: 3 }, {x:5, y:3}]
    },
      "1W": {
        "prices":[ 
          { x: 2, y: 7 },
          { x: 3, y: 1 },
          { x: 1, y: 6 },
          { x: 1, y: 5 },
          { x: 3, y: 5 },
          { x: 3, y: 4 },
          { x: 4, y: 5 },        
          { x: 5, y: 1 },
        ],
        "high": [{x:1, y:7},{x: 5, y: 7}],
        "low": [{x: 1, y: 1}, {x: 5, y: 1}],
        "closing": [{x:1, y: 1},{x:5, y:1}]
    },
      "1M": { 
        "prices": [ 
          { x: 3, y: 5 },
          { x: 1, y: 7 },
          { x: 4, y: 5 }, 
          { x: 4, y: 4 },
          { x: 7, y: 3 },
          { x: 3, y: -2 },
          { x: 1, y: 6 },
          { x: 1, y: 5 },
          { x: 4, y: 4 },
          { x: 7, y: 3 },
          { x: 1, y: 9 },
          { x: 3, y: 1 },
          { x: 1, y: 6 },
        ],
        "high": [{x:1, y:-2},{x: 7, y: -2}],
        "low": [{x: 1, y: 9}, {x: 7, y: 9}],
        "closing": [{x:1, y: 6},{x:7, y:6}]        
    },
      "3M": {
        "prices": [ 
        { x: 3, y: 5 },
        { x: 1, y: 7 },
        { x: 4, y: 5 }, 
        { x: 7, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 1 },
        { x: 4, y: 2 },
        { x: 1, y: 1 },
        { x: 4, y: 4 },
        { x: 7, y: 3 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
      ],
      "high": [{x:1, y:1},{x: 7, y: 1}],
      "low": [{x: 1, y: 7}, {x: 7, y: 7}],
      "closing": [{x:1, y: 5},{x:7, y:5}]      
    },
    "1Y": {
      "prices": [ 
        { x: 3, y: 5 },
        { x: 1, y: 7 },
        { x: 4, y: 5 }, 
        { x: 7, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 1 },
        { x: 4, y: 2 },
        { x: 4, y: 3 },
        { x: 1, y: 6 },
        { x: 7, y: 3 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
      ],
      "high": [{x:1, y:1},{x: 7, y: 1}],
      "low": [{x: 1, y: 7}, {x: 7, y: 7}],
      "closing": [{x:1, y: 5},{x:7, y:5}]      
    },
    "ALL": {
      "prices": [ 
      { x: 3, y: 5 },
      { x: 1, y: 7 },
      { x: 4, y: 5 }, 
      { x: 7, y: 3 },
      { x: 4, y: 2 },
      { x: 1, y: 6 },
      { x: 4, y: 2 },
      { x: 4, y: 4 },
      { x: 3, y: 1 },
      { x: 3, y: 1 },
      { x: 1, y: 6 },
      { x: 7, y: 3 },
      { x: 1, y: 5 },
    ],
    "high": [{x:1, y:1},{x: 7, y: 1}],
    "low": [{x: 1, y: 7}, {x: 7, y: 7}],
    "closing": [{x:1, y: 5},{x:7, y:5}]      
  }
  }
  }

  render(){
    return(
      <View>
        <View style={{backgroundColor: "white", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 190}}>
          <VictoryChart
            theme={null}
            animate={{easing: 'cubicInOut', duration: 500}}
            categories={null}
            labels={null}
            padding={0}
            height={140}
          >
            <VictoryLine
              style={{
                data: { stroke: Colors.appGreen, strokeWidth: 2 }
              }}
              data={this.state.data[this.state.key].prices}
            />
            <VictoryLine
              style={{
                data: { stroke: "black", strokeWidth: 1 }
              }}
              data={this.state.data[this.state.key].high}
              labelComponent={<Text style={{fontSize: 10, color: 'red'}}>high $7</Text>}
              labels={['high $7']}
            />
            <VictoryLine
              style={{
                data: { stroke: "black", strokeWidth: 1 }
              }}
              labelComponent={<Text style={{fontSize: 10, color: 'red'}}>low $1</Text>}
              labels={['low $1']}            
              data={this.state.data[this.state.key].low}
            />
            <VictoryLine
              style={{
                data: { stroke: "black", strokeDasharray: "10,10", strokeWidth: 1 }
              }}
              labelComponent={<Text style={{fontSize: 10, color: 'red'}}>closing $1</Text>}
              labels={['closing $1']}            
              data={this.state.data[this.state.key].closing}
            />
            <VictoryAxis tickFormat={() => ''} style={{ axis: {stroke: "none"} }} />
          </VictoryChart>
          <View style={{height: 60, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Image 
              style={{height: 25, width: 25, }}
              source={{uri: "https://www.zellepay.com/sites/default/files/2017-07/HIW_Step3.png"}}/>
            <Image
              style={{height: 25, width: 25, }}
              source={{uri: "https://www.zellepay.com/sites/default/files/2017-07/HIW_Step3.png"}}/>
            />
          </View>
        </View>
        <View style={styles.chart}>
        {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map( buttonText => (
          <ChartButton
            key={buttonText}
            buttonText={buttonText} 
            buttonAction={() => this.setState({key: buttonText})}
            buttonActive={this.state.key === buttonText}
            />
        ))}
        </View>
      </View>
    )
  }
}

export default Chart

const styles = StyleSheet.create({
  chart: {
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 35,
    padding: 5,
    marginTop: 10,
  },
})
