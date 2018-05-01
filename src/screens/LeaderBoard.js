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

const ResultItem = ({result}) => (
  <View style={[resultStyles.resultBox, result.first ? {marginLeft: 0, marginRight: 0, marginTop: 0} : {}]}>
    <View>
      <Image
        style={{width: 50, height: 50, borderRadius: 25}}
        source={{uri: result.portfolioUrl}}
      />
    </View>
    <View>
      <Text style={resultStyles.heading}>{result.name}</Text>
      <Text style={resultStyles.name}>{result.username}</Text>
    </View>
    <View>
      <Text style={{color: 'green'}}>pretty chart</Text>
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
  heading: {
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
    width: 55,
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
                <Text style={styles.heading}>The EMCEE</Text>
                <Text style={styles.heading}>Community</Text>
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
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    paddingBottom: -3,
    marginLeft: 10,
  },
});
