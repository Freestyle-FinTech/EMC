import React from 'react';

import {Image, TouchableOpacity} from 'react-native';

export default (props) => (
  <TouchableOpacity
    onPress={ () => props.props.navigate('Main')}
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