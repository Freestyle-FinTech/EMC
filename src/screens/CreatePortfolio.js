import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableHighlight,
  Dimensions,
  BackgroundImage,
  ImageBackground
} from 'react-native';

import CustomButton from '../components/CustomButton';

type Props = {};

export default class CreatePortfolio extends Component<Props> {
  state = {
    name: "",
    imageUrl: 'https://via.placeholder.com/350x350'
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          style={styles.portfolio}
          source={{uri: this.state.imageUrl}}>
          <TextInput
            style={styles.input}
            onChange={(e) => this.setState({name: e.target.value}) } 
            value={this.state.name}
            />
        </ImageBackground>
        <CustomButton
          buttonText="Create"
          buttonAction={ () => {}}
        />
        <ScrollView>
        <FlatList
          numColumns={3}
          data={[{imageUrl: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350', key: 'a'}, {imageUrl: 'https://via.placeholder.com/350x350', key: 'b'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'c'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'd'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'b'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'e'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'f'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'g'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'h'},{imageUrl: 'https://via.placeholder.com/350x350', key: 'i'}]}
          renderItem={({item}) => (
            <TouchableHighlight onPress={(e) => {this.setState({imageUrl: item.imageUrl})}}>
              <Image
                style={styles.image}
                source={{uri: item.imageUrl}}/>
            </TouchableHighlight>
          )}
        />
        </ScrollView>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  portfolio: {
    marginTop: 20,
    backgroundColor: 'darkgrey',
    borderRadius: 15, 
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    width: width/3-1,
    height: width/3-1,
    resizeMode: 'cover'
  },
  input: {
    backgroundColor: 'white',
    height: 60,
    width: 200
  },
  container: {
    marginTop: 20,
    borderRadius: 15,
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
