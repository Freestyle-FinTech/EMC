import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet, 
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import Chart from "./Chart"

class WithChart extends Component {
  render(){
    // debugger
    let { selectedUser, selectedPortfolio, selectedStock, user } = this.props
    let data
    if(selectedStock && selectedStock.chart) {
      data = selectedStock.chart.data
    } else if(selectedPortfolio && selectedPortfolio.chart) {
      data = selectedPortfolio.chart.data      
    } else if(selectedUser && selectedUser.chart) {
      data = selectedUser.chart.data      
    } else {
      data = user.chart.data
    }
    return(
      <View style={{height: 330}}>
        {this.props.children}
        <Chart data={data}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedPortfolio: state.search.selectedPortfolio,
  selectedStock: state.search.selectedStock,
  selectedUser: state.search.selectedUser,
  user: state.user
})

export default connect(mapStateToProps)(WithChart)