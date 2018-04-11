import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar } from 'victory-native';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  WebView
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
  state = {
    key: "day",
    data: {
      day: [ 
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },        
        { x: 5, y: 1 },
        { x: 4, y: 1 },
        { x: 3, y: 2 },
        { x: 5, y: 3 } 
      ],
      week: [ 
        { x: 2, y: 7 },
        { x: 3, y: 1 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
        { x: 3, y: 5 },
      ],
      month: [ 
        { x: 3, y: 5 },
        { x: 1, y: 7 },
        { x: 4, y: 5 }, 
        { x: 4, y: 4 },
        { x: 7, y: 3 },
      ]      
    }
  }

  buildChart = () => (
    <VictoryChart
        theme={VictoryTheme.material}
        // animate={{ duration: 1000, easing: "bounce" }}
        // animate={true}
      >
      {/* <VictoryBar
          data={this.state.data[this.state.key]}
          style={{
            data: { fill: "tomato", width: 12 }
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        /> */}
        {/* <VictoryLine
          animate={true}
          // clipPath={275}
          // renderClipPath(props, id) {
          //   props.width = props.width || 275;
          style={{
            data: { stroke: "green", fill: "orange" },
            parent: { border: "1px solid #ccc"}
          }}
          data={this.state.data[this.state.key]}
        /> */}
    </VictoryChart>
  )

  render() {
    // const data = ;
    // debugger
    // console.log(this.state.data[this.state.key]);
    return (
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
      // <ScrollView style={styles.container}>
      //   <View style={{height: 200, width: '100%', borderRadius: 15, backgroundColor: "white"}}>
      //     {/* {this.buildChart()} */}
      //   </View>
      //   <View style={styles.chart}>
      //     <TouchableOpacity style={styles.chartButton} onPress={ () => this.setState({key: "day"})}>
      //       <Text>day</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity style={styles.chartButton} onPress={ () => this.setState({key: "week"})}>
      //       <Text>week</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity style={styles.chartButton} onPress={ () => this.setState({key: "month"})}>
      //       <Text>month</Text>
      //     </TouchableOpacity>
      //   </View>
      //   <FlatList
      //     contentContainerStyle={styles.list}
      //     data={this.props.portfolios}
      //     renderItem={({item}) => <ListItem asset={item} />}
      //   />
      //   <CustomButton
      //     buttonAction={() => {}}
      //     buttonText="Create"
      //   />
      // </ScrollView>
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