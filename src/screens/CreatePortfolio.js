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
import axios from 'axios';
import { dispatch, connect } from 'react-redux';
import { Colors } from '../constants/styles';
import { createPortfolio } from '../actions/index' 
import CustomButton from '../components/CustomButton';
import GoBackButton from '../components/GoBackButton';

type Props = {};

class CreatePortfolio extends Component<Props> {
  state = {
    name: "",
    imageUrl: 'https://via.placeholder.com/350x350'
  }

  render() {
    return (
      <View style={{backgroundColor: Colors.appGrey}}>
        <View style={styles.container}>
          <GoBackButton navigation={this.props.navigation}/>
          <ImageBackground 
            style={styles.portfolio}
            imageStyle={{borderRadius: 15}}
            source={{uri: this.state.imageUrl}}>
            <TextInput
              style={styles.input}
              placeholder='Name album'
              onChangeText={(name) => this.setState({name}) } 
              value={this.state.name}
              />
          </ImageBackground>
          <CustomButton
            buttonText="Create"
            buttonAction={() => this.props.createPortfolio({name: this.state.name, imgUrl: this.state.imageUrl}, this.props.navigation.navigate)}
          />
          <ScrollView style={{marginTop: 10}}>
          <FlatList
            numColumns={3}
            data={[
              {imageUrl: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350', key: 'a'}, 
              {imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/139/911/non_2x/vector-grey-gradient-abstract-background.jpg', key: 'b'},
              {imageUrl: 'https://images.pexels.com/photos/247671/pexels-photo-247671.jpeg?auto=compress&cs=tinysrgb&h=350', key: 'c'},
              {imageUrl: 'https://dmi3w0goirzgw.cloudfront.net/gallery-images/840x560/406000/600/406638.jpg', key: 'd'},
              {imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmduMiNc-E9hkuApAJ8XnQVD1Sbexj3Xhq3kShwZC9hckWSRwOg', key: 'b'},
              {imageUrl: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/57cf3d2846c3c4d2933a9d28/1474332420480/DSC_5454.jpg', key: 'e'},
              {imageUrl: 'https://via.placeholder.com/350x350', key: 'f'},
              {imageUrl: 'https://via.placeholder.com/350x350', key: 'g'},
              {imageUrl: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article14379834.ece/ALTERNATES/s615/050318_LRR_MEN_WomenTech.jpg', key: 'h'},
              {imageUrl: 'https://i.guim.co.uk/img/media/7cd49fa81b1a41f1631902afdec6a2386ca38713/0_0_4000_3160/master/4000.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=194fc11c9e124a94391d757dfd0562c7', key: 'i'}]}
            renderItem={({item}) => (
              <TouchableHighlight onPress={(e) => {this.setState({imageUrl: item.imageUrl})}}>
                <Image
                  style={styles.image}
                  source={{uri: item.imageUrl}}/>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}/>}
          />
          </ScrollView>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  user: state.user
}) 

// mapDispatchToProps = (dispatch) => ({
//   createNewPortfolo: 
// })

export default connect(mapStateToProps, {createPortfolio})(CreatePortfolio)

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  portfolio: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'rgb(139,139,139)',
    borderRadius: 15, 
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    // flex: 1,
    width: width/3,
    height: width/3,
    resizeMode: 'cover'
  },
  input: {
    backgroundColor: 'white',
    height: 60,
    width: 200,
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    borderRadius: 15,
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appWhite,
  }
});
