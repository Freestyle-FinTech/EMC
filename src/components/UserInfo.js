import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet, 
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";

const UserInfo = ({user, stuff}) => (
  <View style={{height: '100%', width: '100%', backgroundColor: 'white', marginTop: 10}}>
    <Image 
      source={{uri: user.pictureUrl}}
      style={{height: 50, width: 50, borderRadius: 25, marginTop: 50, borderWidth: 1, borderColor: 'orange'}}
    />
    <Text>{stuff}</Text>
    <Text>{user.username}</Text>
    <Text>{user.about}</Text>    
  </View>
)

mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(UserInfo)