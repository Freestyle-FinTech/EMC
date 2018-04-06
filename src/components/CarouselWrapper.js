import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet
} from "react-native";

import Carousel from 'react-native-carousel';

export default CarouselWrapper = () => (
  <View style={{flex: 8, borderRadius: 10, marginBottom: 4}}>
    <Carousel
      styles={styles.carousel}
      animate={false}
      indicatorAtBottom={true}
      indicatorColor="#FFFFFF"
      indicatorOffset={10}>
      <View style={{borderRadius: 10, position: 'absolute', height: '100%', width: '100%'}}>
        <ImageBackground
          style={{
            flex: 1
          }}
          imageStyle={{width: '100%', borderRadius: 10, resizeMode: 'stretch' }}
          source={require('../assets/mainImage.png')}
        >
          {/* <Text style={{color: 'black', alignSelf: 'flex-end'}}>swipe to learn more</Text> */}
        </ImageBackground>
      </View>
      <View style={[styles.lol, {backgroundColor: "blue"}]}>
        <Text>Reasons for things</Text>
      </View>
      <View style={[styles.lol, {backgroundColor: "red"}]}>
        <Text>More reasons!!!! Register now!!!!</Text>
      </View>
    </Carousel>
  </View>
)

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "green"
  },
  lol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
})