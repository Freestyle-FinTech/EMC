import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import CustomButton from '../components/CustomButton';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const ListItem = (props) => (
  <View style={{
    flex: 1,
    margin: 5,
    minWidth: 150,
    maxWidth: 150,
    height: 150,
    maxHeight:150,
    backgroundColor: '#CCC',
    borderRadius: 15,
    justifyContent: "center", 
    alignItems: "center"
    }}>
    <View style={{backgroundColor: "white"}}>
      <Text>
        {props.asset.name}
      </Text>
      <Text style={{color: "rgb(109,233,180)"}}>
        {props.asset.worth}
      </Text>
    </View>
  </View>
)

type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{height: 200, width: '100%', borderRadius: 15, backgroundColor: "white"}}>
          
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.props.portfolios}
          renderItem={({item}) => <ListItem asset={item} />}
        />
        <CustomButton
          buttonAction={() => {}}
          buttonText="Create"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(65,65,67)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

const mapStateToProps = (state) => ({
  portfolios: state.user.portfolios
})

export default connect(mapStateToProps)(Home)