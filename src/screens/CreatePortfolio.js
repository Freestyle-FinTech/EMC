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

import CustomButton from '../components/CustomButton';

type Props = {};

class CreatePortfolio extends Component<Props> {
  state = {
    name: "",
    imageUrl: 'https://via.placeholder.com/350x350'
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          style={styles.portfolio}
          imageStyle={{borderRadius: 15}}
          source={{uri: this.state.imageUrl}}>
          <TextInput
            style={styles.input}
            onChangeText={(name) => this.setState({name}) } 
            value={this.state.name}
            />
        </ImageBackground>
        <CustomButton
          buttonText="Create"
          buttonAction={() => this.props.createNewPortfolo({name: this.state.name, imgUrl: this.state.imageUrl}, this.props.user, this.props.navigation.navigate)}
        />
        <ScrollView>
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
        />
        </ScrollView>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  user: state.user
}) 

mapDispatchToProps = (dispatch) => ({
  createNewPortfolo: (newPortfolio, user, navigate) => {
    // debugger
    user.portfolios = [...user.portfolios, newPortfolio]
    axios({
      url: `http://localhost:3000/users/${user.id}`,
      data: user,
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => {
      // debugger
      navigate('Home')
    }).catch( err => {
      console.log(err)
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePortfolio)

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
