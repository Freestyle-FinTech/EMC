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

export default class WithChart extends Component {
  render(){
    return(
      <View style={{height: 330}}>
        {this.props.children}
        <Chart/>
      </View>
    )
  }
}
   