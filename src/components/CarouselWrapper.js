import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions
} from "react-native";

import Carousel from 'react-native-carousel';

export default CarouselWrapper = () => (
  <View style={{flex: 1}}>
    <Carousel
      styles={styles.carousel}
      animate={false}
      indicatorAtBottom={true}
      indicatorColor="#FFFFFF"
      indicatorOffset={0}
      indicatorSpace={15}
      indicatorSize={25}>
      <View style={[styles.lol, {backgroundColor: "green"}]}>
        <ImageBackground
          style={{
            flex: 1
          }}
          imageStyle={{flex: 1, width: '100%', left: '-50%', borderRadius: 15, resizeMode: 'stretch' }}
          source={require('../assets/mainImage.png')}
        >
        </ImageBackground>
      </View>
      <View style={[styles.lol, {backgroundColor: "blue"}]}>
        <Text>Reasons for things</Text>
      </View>
      <View style={[styles.lol, {backgroundColor: "purple"}]}>
        <Text>More reasons!!!! Register now!!!!</Text>
      </View>
      <View style={[styles.lol, {backgroundColor: "yellow"}]}>
        <Text>Such app, may wow!!!</Text>
      </View>
    </Carousel>
  </View>
)

const styles = StyleSheet.create({
  carousel: {
    flex: 0.8,
    backgroundColor: "green",
  },
  lol: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
})