import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';


import { Colors } from '../constants/styles'
import PortfolioList from '../components/PortfolioList'
import PortfolioItem from '../components/PortfolioItem'

type Props = {};

const MarketItem = ({portfolio}) => {
  return <View styl={{flex: 1}}>
    <PortfolioItem asset={portfolio.item} marginLeft={10}/>
    <View style={{flexDirection: 'row', paddingLeft: 10}}>
      <Image 
        source={{uri: portfolio.item.creator.portfolioUrl}}
        style={{height: 50, width: 50, borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}
      />
      <View style={{marginLeft: 5}}>
        <Text>{portfolio.item.creator.name}</Text>
        <Text>{portfolio.item.creator.username}</Text>
      </View>
    </View>
  </View>
}

const resultStyles = StyleSheet.create({

})

class Market extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: Colors.appWhite, borderTopLeftRadius: 15, borderTopRightRadius: 15, flex: 1}}>
          <Text style={styles.heading}>Marketplace</Text>
          <Text style={styles.text}>From content creators we love</Text>
          <View>
            <FlatList
              data={this.props.portfolios}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              renderItem={ (item) => <MarketItem portfolio={item}/> }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{padding: 10}}>
            <View style={styles.settingOptionWrapper}>
              <Text style={styles.settingOption}>Top Performers</Text><Text style={styles.settingArrow}>></Text>
            </View>
            <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>
            <View style={styles.settingOptionWrapper}>
              <Text style={styles.settingOption}>New Creators</Text><Text style={styles.settingArrow}>></Text>
            </View>
            <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>        
            <View style={styles.settingOptionWrapper}>
              <Text style={styles.settingOption}>Industry Specific</Text><Text style={styles.settingArrow}>></Text>
            </View>
            <View style={{height: 1, width: '100%', backgroundColor: "black"}}/>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios
})

export default connect(mapStateToProps)(Market)

const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
  },
  settingOption: {
    fontSize: 16,
    paddingLeft: 5,
    marginBottom: 10,
    marginTop: 10,    
  },
  settingArrow: {
    color: Colors.appGreen,
    fontSize: 20,    
  },
  settingOptionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.appGrey,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10
  },
});
