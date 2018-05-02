import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import WithChart from '../components/WithChart';
import { Colors } from '../constants/styles';
import { connect } from 'react-redux';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border, VictoryAxis } from 'victory-native';

const NUMBER_OF_POINTS = 20

const randomNum = (i) => Math.floor(Math.random() * 20 + Math.log2(i * (i/100))) * (Math.random() < .03 ? 4 : 1)

const generateChart = () => Array.apply(null, {length: NUMBER_OF_POINTS}).map( (el, i) => randomNum(i+1))

const ResultItem = ({result}) => (
  <View style={[resultStyles.resultBox, result.first ? {marginLeft: 0, marginRight: 0, marginTop: 0} : {}]}>
    <View>
      <Image
        style={{width: 50, height: 50, borderRadius: 25}}
        source={{uri: result.portfolioUrl}}
      />
    </View>
    <View>
      <Text style={resultStyles.stuff}>{result.name}</Text>
      <Text style={resultStyles.name}>{result.username}</Text>
    </View>
    <View>
      <Text style={{color: 'green'}}>
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
      </Text>
    </View>
    <View style={resultStyles.priceBox}>
      <Text style={resultStyles.price}>+{Math.round(Math.random() * 2000)/100}%</Text>
    </View>
  </View>
)

const resultStyles = StyleSheet.create({
  resultBox: {
    height: 60,
    padding: 10,
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
  priceBox: {
    backgroundColor: Colors.appGreen,
    borderRadius: 5,
    height: 20,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    color: Colors.appWhite
  }
})

type Props = {};
class LeaderBoard extends Component<Props> {
  render() {
    const growth = 3.65
    const plus = growth > 0 ? '+' : ''
    const worth = 134111.68
    let data = this.props.portfolios.map( portfolio => portfolio.creator)
    data[0].first = true
    return (
      <View style={{flex: 1, backgroundColor: Colors.appGrey}}>
        <View style={styles.container}>
          <WithChart>
            <View style={{height: 90, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View style={{position: 'absolute', top: 20, left: 10}}>
                <Text style={styles.stuff}>The EMCEE</Text>
                <Text style={styles.stuff}>Community</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={styles.worth}>${worth}</Text>
                <View style={[styles.priceBox,{backgroundColor: growth > 0 ? Colors.appGreen : Colors.appPurple}]}>
                  <Text style={styles.priceChange}>{`${plus}${growth}(${Math.round(growth/worth * 10000)/100}%)`}</Text>
                </View>
              </View>
            </View>
          </WithChart>
          <View style={{flex: 1}}>
            <ScrollView style={{marginTop: 4, flex: 1, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              {/* {data.map( user => <ResultItem key={user.username} result={user} />)} */}
              <FlatList
                style={{backgroundColor: 'white', borderRadius: 15}}
                scrollEnabled={false}
                data={data}
                renderItem={({item}) => <ResultItem result={item}/>}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios
})

export default connect(mapStateToProps)(LeaderBoard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
  },
  priceChange: {   
    color: Colors.appWhite,
    fontSize: 15,
  },
  priceBox: {
    marginLeft: 5,
    borderRadius: 3,
    paddingRight: 3,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  worth: {
    fontSize: 24,
  },
  stuff: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    paddingBottom: -3,
    marginLeft: 10,
  },
});
