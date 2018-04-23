import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border } from 'victory-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../constants/styles';

const ChartButton = ({ buttonText, buttonAction, buttonActive }) => (
  <TouchableOpacity 
    style={styles.chartButton} 
    onPress={buttonAction}
    style={{backgroundColor: (buttonActive ? Colors.appGreen : 'white'), borderRadius: 3, justifyContent: 'center'}}>
    <Text
      style={{color: (buttonActive ? 'white' : Colors.appGreen), fontWeight: 'bold', fontSize: 16, padding: 7}}
    >
      {buttonText}
    </Text>
  </TouchableOpacity>
)

type Props = {};

export default class Home extends Component<Props> {
  state = {
    key: "1D",
    data: {
      "1D": [ 
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },        
        { x: 5, y: 1 },
        { x: 4, y: 1 },
        { x: 3, y: 2 },
        { x: 5, y: 3 } 
      ],
      "1W": [ 
        { x: 2, y: 7 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
        { x: 3, y: 5 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },        
        { x: 5, y: 1 },
      ],
      "1M": [ 
        { x: 3, y: 5 },
        { x: 1, y: 7 },
        { x: 4, y: 5 }, 
        { x: 4, y: 4 },
        { x: 7, y: 3 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
        { x: 4, y: 4 },
        { x: 7, y: 3 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
      ],
      "3M": [ 
        { x: 3, y: 5 },
        { x: 1, y: 7 },
        { x: 4, y: 5 }, 
        { x: 7, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 1 },
        { x: 4, y: 2 },
        { x: 1, y: 6 },
        { x: 4, y: 4 },
        { x: 7, y: 3 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
      ]    
    }
  }

  render(){
    return(
      <View>
        <View style={{height: 250, width: '100%', borderRadius: 15, backgroundColor: "white"}}>
          <VictoryChart
            theme={null}
            // animate={{ duration: 1000, easing: "bounce" }}
            animate={true}
            height={250}
            categories={null}
            style={{
              labels: null
            }}
          >
            <VictoryLine
              style={{
                data: { stroke: Colors.appGreen, width: 2 }
              }}
              data={this.state.data[this.state.key]}
            />
          </VictoryChart>
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
