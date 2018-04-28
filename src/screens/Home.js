import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, border } from 'victory-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  WebView,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native';

import PortfolioTab from '../components/PortfolioTab';
import HomeTabs from '../components/HomeTabs';
import WithChart from '../components/WithChart';
import { Colors } from '../constants/styles';

type Props = {};
const ChartHeader = (props) => {
  const date = new Date()
  const growth = props.user.portfolioGrowth
  const plus = growth > 0 ? '+' : ''
  const worth = props.user.portfolioWorth
  const hours = date.getHours() <= 12 ? date.getHours() : 24 - date.getHours()
  const ampm = date.getHours() <= 12 ? 'am' : 'pm' 
  const currentTime = `Today ${hours}:${date.getMinutes()}${ampm}`
  return (
    <View style={{height: 90, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
      <View style={{position: 'absolute'}}>
        <Image
          source={{uri: props.user.pictureUrl}}
          style={{height: 40, width: 40, borderRadius: 20, marginTop: 10, marginLeft: 10}}
        />
        <Text style={styles.heading}>{props.user.userName}</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={styles.worth}>${worth}</Text>
        <View style={[styles.priceBox,{backgroundColor: growth > 0 ? Colors.appGreen : Colors.appPurple}]}>
          <Text style={styles.priceChange}>{`${plus}${growth}(${Math.round(growth/worth * 10000)/100}%)`}</Text>
        </View>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
    </View>
  )
}

class Home extends Component<Props> {
  componentDidMount(){
    // debugger
  }
  render() {
    // const HomeChart = ChartHeader(this.props.user);
    return (
      <ScrollView style={styles.container}>
        <WithChart>
          <ChartHeader user={this.props.user}/>
        </WithChart>
        <HomeTabs navigate={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appGrey,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10,
  },
  priceChange: {   
    color: Colors.appWhite,
    fontSize: 12, 
  },
  priceBox: {
    marginLeft: 5,
    borderRadius: 5,
    paddingRight: 5,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  worth: {
    fontSize: 30,
  },
  time: {
    fontSize: 10
  }
});

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Home)