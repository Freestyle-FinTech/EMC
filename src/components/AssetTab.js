import React from 'react';
import {
  Text,
  View,
  StyleSheet, 
  TouchableOpacity
} from 'react-native';
import CustomButton from './CustomButton';

export default AssetTab = (props) => (
  <View style={{flex: 1, minHeight: 300, marginTop: 20, alignItems: 'center',justifyContent: 'center', backgroundColor: 'white'}}>
    <CustomButton 
      buttonText="Buy Asset" 
      buttonAction={() => props.screenProps.navigation.navigate('BuyAsset')}/>
  </View>
)