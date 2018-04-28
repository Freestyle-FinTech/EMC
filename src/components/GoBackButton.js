import React from 'react';
import { NavigationActions } from 'react-navigation';

import {Image, TouchableOpacity} from 'react-native';

export default ({navigation}) => (
  <TouchableOpacity
    onPress={ () => navigation.goBack()}
    style={{
      position: 'absolute',
      top: 30,
      right: '5%',
      height: 30,
      width: 30
    }}>
    <Image
      style={{
        width: 20,
        height: 20,
        resizeMode: 'cover'
      }}
      source={{uri: "https://www.keyirobot.com/img/close.png"}}
      />
  </TouchableOpacity>
)