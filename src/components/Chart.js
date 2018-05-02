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
import CustomButton from './CustomButton';
// import GenerateCharts from '../chartGenerator';

class Chart extends Component {
  state = {
    key: '1D'
  }
  render(){
    if ( this.props.data !== undefined){
      return(
        <View>
          <View style={{backgroundColor: "white", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 190}}>
            <VictoryChart
              theme={null}
              animate={{easing: 'cubicInOut', duration: 500, onLoad: { duration: 50 }}}
              categories={null}
              labels={null}
              padding={0}
              height={140}
            >
              <VictoryLine
                style={{
                  data: { stroke: Colors.appGreen, strokeWidth: 1 }
                }}
                data={this.props.data[this.state.key].prices}
              />
              <VictoryLine
                style={{
                  data: { stroke: Colors.appGrey, strokeWidth: 1 }
                }}
                data={this.props.data[this.state.key].high}
                labelComponent={<Text style={{fontSize: 10, color: 'red'}}>high $7</Text>}
                labels={['high $7']}
              />
              <VictoryLine
                style={{
                  data: { stroke: Colors.appGrey, strokeWidth: 1 }
                }}
                labelComponent={<Text style={{fontSize: 10, color: 'red'}}>low $1</Text>}
                labels={['low $1']}            
                data={this.props.data[this.state.key].low}
              />
              <VictoryLine
                style={{
                  data: { stroke: Colors.appGrey, strokeDasharray: "10,10", strokeWidth: 2 }
                }}
                labelComponent={<Text style={{fontSize: 10, color: 'red'}}>closing $1</Text>}
                labels={['closing $1']}            
                data={this.props.data[this.state.key].closing}
              />
              <VictoryAxis tickFormat={() => ''} style={{ axis: {stroke: "none"} }} />
            </VictoryChart>
            <View style={{height: 60, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => console.log('show feed stuff')}
              >
                <Image
                  style={{height: 25, width: 25, }}
                  source={{uri: "https://www.zellepay.com/sites/default/files/2017-07/HIW_Step3.png"}}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25, }}
                  source={{uri: "https://www.zellepay.com/sites/default/files/2017-07/HIW_Step3.png"}}/>
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.chart}>
          {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map( buttonText => (
            <CustomButton
              key={buttonText}            
              buttonText={buttonText} 
              buttonAction={() => this.setState({key: buttonText})}
              buttonStyles={{width: 32, height: 20, backgroundColor: (this.state.key === buttonText ? Colors.appGreen : 'white'), borderRadius: 2, justifyContent: 'center'}}
              textStyles={{color: (this.state.key === buttonText ? 'white' : Colors.appGreen), fontWeight: 'bold', fontSize: 16}}
            />
          ))}
          </View>
        </View>
      )
    } else {
      return(
        <View style={{backgroundColor: "white", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 190}}>
          <Text>Looks like there's no data here yet</Text>
        </View>
      )
    }
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
