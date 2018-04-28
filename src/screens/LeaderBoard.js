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
  <View style={resultStyles.resultBox}>
    <View>
      <Image
        style={{width: 40, height: 40, borderRadius: 20}}
        source={{uri: result.portfolioUrl}}
      />
    </View>
    <View>
      <Text style={resultStyles.name}>{result.name}</Text>
      <Text style={resultStyles.heading}>{result.username}</Text>
    </View>
    <View>
      <Text>pretty chart</Text>
    </View>
    <View>
      <Text style={resultStyles.price}>{Math.round(Math.random() * 1000)/10}%</Text>
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

type Props = {};
class LeaderBoard extends Component<Props> {
  render() {
    let data = this.props.portfolios.map( portfolio => portfolio.creator)
    return (
      <View style={{flex: 1, backgroundColor: Colors.appGrey}}>
        <View style={styles.container}>
          <WithChart>
            <View style={{backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View>
                <Text>The EMCEE</Text>
                <Text>Community</Text>
              </View>
              <Text>$134,112.34</Text>
              <Text>+3.45(2.3%)</Text>              
            </View>
          </WithChart>
          <ScrollView style={{top: -15, paddingBottom: 40, backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            {data.map( user => <ResultItem result={user} />)}
            {/* <FlatList
              style={{backgroundColor: 'white', borderRadius: 15, minHeight: 600}}
              scrollEnabled={false}
              data={data}
              renderItem={({item}) => <ResultItem result={item}/>}
              keyExtractor={(item, index) => index.toString()}
            /> */}
          </ScrollView>
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
  }
});
