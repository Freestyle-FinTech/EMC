import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '../constants/styles';
import PortfolioList from '../components/PortfolioList';
import SearchBox from '../components/SearchBox';
import AssetListItem from '../components/AssetListItem';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: Colors.appWhite, borderRadius: 15, flex: 1}}>
          {/* <SearchBox/> */}
          <Text style={{marginTop: 15, marginLeft: 10}}>Top Results</Text>
          {/* <FlatList
            scrollEnabled={true}
            data={[{title: "SPOT", name: 'Spotify Technology SA', price: '+3.45%'},{title: "TSLA", name: 'Tesla Inc', price: '+0.032%'}]}
            renderItem={({item}) => <ResultItem result={item} />}
          /> */}
          <AssetListItem
            result={{title: "SPOT", name: 'Spotify Technology SA', price: '+3.45%', heading: 'fucking shit'}}
          />
          <Text style={{marginTop: 15, marginLeft: 10}}>Portfolios</Text>          
          <ScrollView style={{backgroundColor: Colors.appWhite, marginTop: 10}}>
            <PortfolioList portfolios={this.props.portfolios}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios,
})

export default connect(mapStateToProps)(Search)

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
