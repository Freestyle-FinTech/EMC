import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet, 
  TouchableOpacity
} from "react-native";

import CustomButton from './CustomButton'
const Feed = () => (
  <View style={{height: '100%', width: '100%', backgroundColor: 'white', marginTop: 10}}>
    <CustomButton
      buttonText={"Create new post"}
      buttonAction={()=>{}}
    />
  </View>
)

export default Feed;