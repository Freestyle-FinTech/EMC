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
import { connect, dispatch } from 'react-redux';
import { Colors } from '../constants/styles';
import axios from 'axios';
import InputWithIcon from './InputWithIcon';

class SearchBox extends Component {
  state = {
    searchQuery: ''
  }

  onSearchClicked = (searchQuery) => {
    // console.log("searching for " + this.state.searchQuery)
    axios.get("http://localhost:3000/stocks")
      .then( res => {
        console.log('I fail here')
        console.log(res)
        debugger
        let results = res.data.filter( stock => (
          stock.heading.toLowerCase().includes(this.state.searchQuery.toLowerCase()) || 
          stock.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        ))
        // debugger
        this.props.setSearchResults(results)
      })
      .catch( err => console.log(err))
    // this.setState({searchQuery})      
  }

  render(){
    return(
      <View style={styles.searchBox}>
        <Text style={styles.stuff}>Search</Text>
        <InputWithIcon
          iconUrl="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png"
          placeholder="Search any ticker, industry, name, etc."
          inputValue={this.state.searchQuery}
          onInputChange={searchQuery => this.setState({searchQuery})}
          onSubmitEditing={this.onSearchClicked}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSearchResults: (results) => dispatch({type: 'SET_STOCK_RESULTS', payload: results})
})

export default connect(null, mapDispatchToProps)(SearchBox)

const styles = StyleSheet.create({
  searchBox: {
    borderRadius: 15,
    height: 120,
    backgroundColor: Colors.appWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1.0,
  },
  stuff: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  input: {
    width: '90%',
    height: 40
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(65,65,67)',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: 20
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,65,67)',
    height: 40,
    width: '90%',
    borderRadius: 20
  },
  inputImage: {
    height: 30, 
    width: 30,
    marginRight: 15,
    resizeMode: "cover"
  }
})